export function convertToShortNumber(number) {
  if (number >= 10000 && number < 1000000) {
    return (number / 10000).toFixed(2) + "만";
  } else if (number >= 1000 && number < 10000) {
    return (number / 1000).toFixed(2) + "천";
  } else if (number >= 1000000) {
    return number / 10000 + "만";
  }
  return number.toString();
}
