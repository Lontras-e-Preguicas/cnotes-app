export function formatRating(rating) {
  let newRating = rating.toFixed(2);

  return newRating.toString().replace(/\./g, ",");
}
