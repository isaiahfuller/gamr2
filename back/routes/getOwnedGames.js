import "dotenv/config";
import express from "express";
import SteamUser from "steam-user";
import mongoose from "mongoose";
import { gameSchema } from "../schemas/steamGameSchema.js";

mongoose.connect("mongodb://127.0.0.1/gamr_v2");

export const getOwnedGames = express.Router();

const baseUrl = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/";
const { STEAM_API } = process.env;

const SteamGame = mongoose.model("SteamGame", gameSchema);

const steam = new SteamUser({
  dataDirectory: "./data",
  enablePicsCache: true,
  autoRelogin: true,
  webCompatibilityMode: true,
});
steam.logOn({ anonymous: true });
steam.on("loggedOn", (det, _par) => {
  console.log(new Date(), "[Owned games] Steam logged in.");
});
steam.on("error", (err) => console.error(err));

function buildAppIdArray(games) {
  return new Promise((res, rej) => {
    if (!games) rej();
    const arr = [];
    for (const game of games) {
      arr.push(game.appid);
    }
    res(arr);
  });
}

function getTagNames(games) {
  return new Promise(async (res, rej) => {
    if (!games) rej();
    const tagids = new Set();
    const gameList = Object.values(games);
    for (const game of gameList) {
      if (!game.appinfo.common.store_tags) continue;
      const tags = game.appinfo.common.store_tags;
      for (const tag of Object.values(tags)) {
        tagids.add(tag);
      }
    }
    const tagNames = await steam.getStoreTagNames("english", [...tagids]);
    res(tagNames);
  });
}

getOwnedGames.get("/steam/owned", async (req, res) => {
  if (req.session.passport && req.session.passport.user) {
    const user = req.session.passport.user;
    const games = await fetch(`${baseUrl}?key=${STEAM_API}&steamid=${user.id}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    if (!games.response) res.status(500);
    try {
      const appids = await buildAppIdArray(games.response.games);
      // console.log(games.response.games)
      // const details = await steam.getProductInfo(appids, []);
      // const details = await getAppDetails(games.response.games)
      const details = await SteamGame.find({
        "appinfo.appid": { $in: appids },
      });
      const tags = await getTagNames(details);
      const gameMap = {};
      for (const game of games.response.games) {
        gameMap[game.appid] = game;
      }
      const combined = [];
      for (let i = 0; i < details.length; i++) {
        combined.push({
          ...details[i]._doc,
          personal: gameMap[details[i].appinfo.appid]
        });
        // details[i].personal = gameMap[details[i].appinfo.appid]
      }
      // console.log(combined);
      delete games.response.games
      const gameData = {apps: combined, tags: tags.tags, personal: games.response}
      // details.tags = tags.tags
      // details.personal = games.response
      res.send(gameData);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  } else res.status(401).send({ isAuthenticated: false });
});
