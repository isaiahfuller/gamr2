import { SteamGameDetails } from "../interfaces";

export function relevanceSort(
  array: SteamGameDetails[],
  searchTerm: string
): SteamGameDetails[] {
  searchTerm = searchTerm.trim();
  console.log(searchTerm);
  const scoreArray = array
    .filter((e) => e.appinfo.common.review_percentage)
    .sort(
      (a, b) =>
        parseInt(b.appinfo.common.review_percentage) -
        parseInt(a.appinfo.common.review_percentage)
    );

  const startsWithArray = scoreArray.filter((e) =>
    e.appinfo.common.name
      .trim()
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase())
  );

  const containsNameArray = scoreArray.filter((e) =>
    e.appinfo.common.name.trim().toLowerCase().match(searchTerm.toLowerCase())
  );

  const combinedSet = new Set([
    ...startsWithArray,
    ...containsNameArray,
  ]);

  return [...combinedSet];
}
