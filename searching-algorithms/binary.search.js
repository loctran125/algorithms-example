// randomly generated N = 40 length array 0 <= A[N] <= 39
const randomArray = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);
const sortedArray = randomArray.sort((a, b) => a - b);
console.log(`this is array: ${sortedArray}`);

const target = 6;
let flag = false;
//binary search
const binarySearch = (array, target) => {
  let start = 0,
    end = array.length - 1;
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return true or console.log
    if (array[mid] === target) {
      console.log(`Found target: ${target} at index ${mid}`);
      flag = true;
      return true;
    }
    // Else look in left or right half accordingly
    else if (array[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  if (!flag) console.log(`Not found target: ${target}`);
};

binarySearch(sortedArray, target);
