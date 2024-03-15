export interface AuthValidResponse {
  isAuthenticated: boolean;
  user: SteamUser;
}

export interface SteamUser {
  avatar: string | "";
  avatarfull: string | "";
  avatarhash: string | "";
  avatarmedium: string | "";
  commentpermission: number | 0;
  communityvisibilitystate: number | 0;
  lastlogoff: number | 0;
  loccountrycode: string | "";
  personaname: string | "";
  personastate: number | 0;
  personastateflags: number | 0;
  primaryclanid: string | "";
  profilestate: number | 0;
  profileurl: string | "";
  realname: string | "";
  steamid: string | "";
  timecreated: number | 0;
}
export interface SteamGameDetails {
  appinfo: {
    appid: string;
    common: {
      store_tags: {
        [key: number]: string;
      };
      steam_release_date: string;
      name: string;
      review_percentage: string;
      icon: string;
      logo: string;
      logo_small: string;
    };
  };
  personal: {
    appid: string;
    playtime_forever: number;
  };
}
export interface SteamGamePersonal {
  game_count: number;
  games: {
    appid: number;
    playtime_disconnected: number;
    playtime_forever: number;
    playtime_linux_forever: number;
    playtime_mac_forever: number;
    playtime_windows_forever: number;
    rtime_last_played: number;
  }[];
}
export interface SteamTagNameList {
  [key: number]: SteamTagName;
}
export interface SteamTagName {
  name: string;
  englishName: string;
}
export interface OwnedGameList {
  apps: SteamGameDetails[];
  packages: never;
  personal: SteamGamePersonal;
  tags: SteamTagNameList;
  unknownApps: never;
  unknownPackages: never;
}

export interface TagStats {
  [key: string]: TagStat
}
export interface TagStat{gameCount: number;
  playtime: number;
  name: string;
  id: string;
  rankings: {
    [key: number]: number;
  };
}