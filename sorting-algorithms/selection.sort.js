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
const selectionSort = (array, n = array.length) => {
  // One by one move boundary of unsorted subarray
  let i, j, minIndex;
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    minIndex = i;
    for (j = i + 1; j < n; j++) if (array[j] < array[minIndex]) minIndex = j;

    // Swap the found minimum element with the first element
    swap(array, minIndex, i);
  }
  return array;
};
const sortedArray = selectionSort(randomArray);
console.log(`this is sorted array: ${sortedArray}`);
