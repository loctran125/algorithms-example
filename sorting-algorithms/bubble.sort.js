// randomly generated N = 40 length array 0 <= A[N] <= 39
const randomArray = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);
console.log(`this is unsorted array: ${randomArray}`);
const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};
const bubbleSort = (array) => {
  let isOrdered;
  for (let i = 0; i < array.length; i++) {
    isOrdered = true;
    for (let x = 0; x < array.length - 1 - i; x++) {
      if (array[x] > array[x + 1]) {
        [array[x], array[x + 1]] = [array[x + 1], array[x]];
        isOrdered = false;
      }
    }
    if (isOrdered) break;
  }
  return array;
};
const sortedArray = bubbleSort(randomArray);
console.log(`this is sorted array: ${sortedArray}`);
