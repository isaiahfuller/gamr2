import "dotenv/config";
import mongoose from "mongoose";
import SteamUser from "steam-user";
import { gameSchema } from "./schemas/steamGameSchema.js";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const { STEAM_API } = process.env;
const SteamGame = mongoose.model("SteamGame", gameSchema);

const steamAppListUrl = `https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${STEAM_API}`;

// main().catch((err) => console.log(err));

const steam = new SteamUser({
  dataDirectory: "./data",
  enablePicsCache: true,
  autoRelogin: true,
  webCompatibilityMode: true,
});
steam.logOn({ anonymous: true });

steam.on("loggedOn", (_det, _par) => {
  console.log(new Date(), "[Updater] Steam logged in.");
  getAllSteamApps();
});

steam.on("error", (err) => console.error(err));

export async function updateDatabase() {
  await mongoose.connect("mongodb://127.0.0.1/gamr_v2");
  console.log(new Date(), "[Updater] Mongoose connected.");
}

async function getAllSteamApps() {
  console.log(new Date(), "[Updater] Update started.");
  const res = await fetch(steamAppListUrl).then((res) => res.json());
  const applist = res.applist.apps;
  let i = 0;
  while (i < applist.length) {
    await getDetails(applist, i);
    i += 1000;
  }
  console.log(new Date(), "[Updater] Update complete.");
}

async function getDetails(appids, start) {
  return new Promise(async (res, rej) => {
    if (!appids) rej();
    const ids = new Array();
    for (let i = start; i < start + 1000; i++) {
      if (i >= appids.length) break;
      ids.push(appids[i].appid);
    }
    const details = await steam.getProductInfo(ids, []);
    for (const g of Object.entries(details.apps)) {
      try {
        const [id, game] = g;
        if (!game.appinfo.common) continue;
        const type = game.appinfo.common.type;
        // delete game.appinfo.common.type
        game.appinfo.common.app_type = type;
        // console.log(type, game)
        await SteamGame.findOneAndUpdate(
          { "appinfo.appid": id },
          { ...game, last_updated: new Date() },
          { upsert: true, new: true }
        );
      } catch (e) {
        console.error(e);
      }
    }
    delay(0.5e3);
    res(0);
  });
}
