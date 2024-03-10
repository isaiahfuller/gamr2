import mongoose from "mongoose";
export const gameSchema = new mongoose.Schema({
  appinfo: {
    appid: String,
    common: {
      associations: {},
      category: {},
      clienticon: String,
      community_hub_visible: String,
      community_visible_stats: String,
      controller_support: String,
      gameid: String,
      genres: {},
      header_image: {},
      icon: String,
      languages: {},
      library_assets: {},
      logo: String,
      logo_small: String,
      metacritic_name: String,
      name: String,
      osarch: String,
      oslist: String,
      primary_genre: String,
      releasestate: String,
      review_percentage: String,
      review_score: String,
      small_capsule: {},
      steam_deck_compatibility: {},
      steam_release_date: String,
      store_asset_mtime: String,
      store_tags: {},
      app_type: String
    },
    extended: {
      developer: String,
      publisher: String,
      homepage: String
    }
  },
  changenumber: Number,
  missingToken: Boolean,
  last_updated: Date
});