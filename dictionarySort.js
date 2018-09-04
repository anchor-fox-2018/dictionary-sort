
function dictionarySort(arr) {
  var temp;
  for (let i = 0; i < arr.length; i++) {
    temp = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }
    var toSort = arr[i];
    arr[i] = arr[temp];
    arr[temp] = toSort;
  }
  return arr.join(',');
}

let arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang'];
let arrOfWord2 = ['anggi', 'angga', 'ani', 'adi'];

console.log(dictionarySort(arrOfWord1));
console.log(dictionarySort(arrOfWord2));
