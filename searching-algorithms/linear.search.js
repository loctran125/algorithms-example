// randomly generated N = 40 length array 0 <= A[N] <= 39
const randomArray = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 40)
);

console.log(`this is array: ${randomArray}`);

//linear search
const target = 6;
let flag = false
randomArray.forEach((item, index) =>{
    if(item == target) {
        console.log(`Found target: ${target} at index ${index}`);
        flag = true
    }
})
if(!flag) console.log(`Not found target: ${target}`)