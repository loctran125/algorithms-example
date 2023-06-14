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
const insertionSort = (array, n = array.length) => {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = array[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
};
const sortedArray = insertionSort(randomArray);
console.log(`this is sorted array: ${sortedArray}`);
