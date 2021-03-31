const PATH_SIZE = 30;

export function formatRating(rating) {
  if (rating == null) {
    return "---";
  }

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

export function formatTitle(title) {
  if (title.length <= 10) {
    return title;
  }

  return title.slice(0, 10).trimEnd() + " ...";
}

export function formatTimeStamp(ts) {
  let date = new Date(ts);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.toLocaleTimeString()}`;
}

export function formatDate(ts) {
  let date = new Date(ts);
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

export function formatTime(ts) {
  let date = new Date(ts);
  return date.toLocaleTimeString();
}
