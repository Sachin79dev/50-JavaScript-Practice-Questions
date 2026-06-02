// 1. Create an array of 5 fruits and print each one using indexing.

let fruits = ["apple", "banana", "mango", "guava", "kiwi"];

fruits.forEach((n) => {
    console.log(n);
})


// 2. Merge two arrays of numbers, remove duplicates, and sort the result in ascending order.


let arr1 = [1, 2, 3, 4]

let arr2 = [3, 4, 5, 6]


let merged = [...arr1, ...arr2]

let unique = merged.filter((n, i) => {
    return merged.indexOf(n) == i;
})


console.log(unique.sort()); // (6) [1, 2, 3, 4, 5, 6]
