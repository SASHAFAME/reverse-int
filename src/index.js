module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  let splitString = n.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}