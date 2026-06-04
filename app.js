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



// 3. Reverse an array without using the built-in reverse() method.

let numb = [1, 2, 3, 4, 5, 6]

let rev =[]

for(i = numb.length -1; i >= 0; i--) {
    rev.push(numb[i]);
}

console.log(rev); // (6) [6, 5, 4, 3, 2, 1]




// 4. Flatten a nested array (up to 2 levels deep) into a single array without using flat().

let deeplyNested = [1, [2, 3], [4, [5, 6]]];


let result = []

for (i = 0; i < deeplyNested.length; i++) {
    if (Array.isArray(deeplyNested[i])) {
        for (j = 0; j < deeplyNested[i].length; j++) {
            if (Array.isArray(deeplyNested[i][j])) {
                for (k = 0; k < deeplyNested[i][j].length; k++) {
                    result.push(deeplyNested[i][j][k])
                }
            } else {
                result.push(deeplyNested[i][j]);
            }
        }
    } else {
        result.push(deeplyNested[i]);
    }
}

console.log(result);




// 5. Find the maximum and minimum values in a numeric array.


let num = [99, 44, 89, 0, 11, 22, 33, 66]


let max = Math.max(...num)
let min = Math.min(...num)

console.log(max); // 99
console.log(min); // 0





// 6. Group an array of objects by a given property (e.g. group students by grade).


const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "B" },
  { name: "Eve", grade: "C" }
];

const grouped = students.reduce((acc, student) => {
  const key = student.grade;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(student);

  return acc;
}, {});

console.log(grouped);



// 7. Count how many times a specific value appears in an array.


let arr = [1, 2, 3, 2, 3, 3, 4]

count = {};


arr.forEach((n, i) => {
    count[n] = (count[n] || 0) + 1
})


console.log(count);
