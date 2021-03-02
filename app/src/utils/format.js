const PATH_SIZE = 30;

export function formatRating(rating) {
  let newRating = rating.toFixed(2);

  return newRating.toString().replace(/\./g, ",");
}

export function pathJoin(old, title) {
  let tempPath = old + "/" + title;

  if (tempPath.length > PATH_SIZE) {
    tempPath = "..." + tempPath.slice(-PATH_SIZE);
  }

  return tempPath;
}
