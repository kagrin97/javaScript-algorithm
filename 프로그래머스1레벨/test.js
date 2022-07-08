function sortDictionary(dictionary) {
  var array = [];
  for (var key in dictionary) {
    array.push(dictionary[key]);
  }
  array.sort(function (a, b) {
    return b - a;
  });
  var newDictionary = {};
  for (var i = 0; i < array.length; i++) {
    newDictionary[i] = array[i];
  }
  return newDictionary;
}

var dictionary = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
};

console.log(sortDictionary(dictionary));
