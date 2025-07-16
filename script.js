// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5 (length of the array)
console.log(arr[0]); // 1 (first element)
console.log(arr[2]); // 3 (third element)
console.log(arr.indexOf(3)); // 2 (index of element 3)
console.log(arr.includes(4)); // true (checks if 4 is in the array)
console.log(arr.join(", ")); // "1, 2, 3, 4, 5" (joins elements into a string)
console.log(arr.slice(1, 3)); // [2, 3] (slices the array from index 1 to 3


console.log(typeof arr); // "object" (type of the array)
console.log(arr.toString()); // "1,2,3,4,5" (converts to string)
(arr.push(6)); // 6 (adds 6 to the end of the array)

console.log(arr.length);
arr.pop(); // 6 (removes the last element)
console.log(arr.length); // 5 (length after pop)
console.log(arr.shift()); // 1 (removes the first element)
console.log(arr.length); // 4 (length after shift)
arr.unshift(0); // 5 (adds 0 to the beginning)
console.log(arr.length); // 5 (length after unshift)
console.log(arr); // [0, 2, 3, 4, 5]
arr.splice(1, 2); // removes 2 elements starting from index 1
console.log(arr); // [0, 4, 5] (array after splice)

let newarr = arr.concat([6, 7,5,4,6,4,5]); // concatenates [6, 7] to arr
console.log(newarr); // [0, 4, 5, 6,
// 7, 5, 4, 6, 4, 5] (new array after concat)
console.log(newarr.reverse()); // [5, 4, 6, 4, 5, 7, 6, 5, 4, 0] (reverses the array)
console.log(newarr.sort()); // [0, 4, 4, 5, 5, 5, 6, 6, 7] (sorts the array)    
console.log(newarr.map(x => x * 2)); // [0, 8, 8, 10, 10, 10, 12, 12, 14] (doubles each element)
console.log(newarr.filter(x => x > 5)); // [6, 6, 7] (filters elements greater than
// 5)
console.log(newarr.reduce((acc, curr) => acc + curr, 0)); // 0 (sums all elements)
console.log(newarr.find(x => x > 5)); // 6 (finds first element greater than 5)
console.log(newarr.findIndex(x => x > 5)); // 2 (index of first element greater than 5)
console.log(newarr.every(x => x > 0)); // true (checks if all elements are greater` than 0)


// Destructuring
let [first, second, ...rest] = newarr;  // destructures the first two elements and the rest into an array
console.log(first); // 0 (first element)
console.log(second); // 4 (second element)
console.log(rest); // [5, 6, 7] (rest of the elements)

console.log(newarr.some(x => x > 10)); // false (checks if any element is greater than 10)
console.log(newarr.flat()); // [0, 4, 5, 6, 7, 5, 4, 6, 4, 5] (flattens the array)
console.log(newarr.flatMap(x => [x, x * 2])); // [0, 0, 4, 8, 5, 10, 6, 12, 7, 14, 5, 10, 4, 8, 6, 12, 4, 8, 5, 10] (maps and flattens the array)

// Obect
const obj = {
    name: "Kumar",
    age: 32,
    city: "York"
};
const obj1 = {
    name: "Vishal Kumar",
    age: 30,
    city: "New York"
};
console.log(obj.name); // "Vishal Kumar" (accessing property)
console.log(obj["age"]); // 30 (accessing property using bracket notation)
console.log(Object.keys(obj)); // ["name", "age", "city"] (keys of the object)
console.log(Object.values(obj)); // ["Vishal Kumar", 30, "New York"] (values of the object)
console.log(Object.entries(obj)); // [["name", "Vishal Kumar"], ["age", 30], ["city", "New York"]] (key-value pairs)
console.log(obj.hasOwnProperty("name")); // true (checks if property exists)



const student = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 },

    // Assuming the context requires 'rollNo' instead of 'id', we will use 'rollNo' here.
    { rollNo: 1, name: "Alice", age: 20 },
    { rollNo: 2, name: "Bob", age: 22 },
    { rollNo: 3, name: "Charlie", age: 21 },
];

console.log(student[2].name); // "Alice" (accessing property of first object in array)

console.log(student[2].age); // 22 (accessing property of second object in array)

// for in loop for objects

// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`); // prints each key-value pair
// }

// // for of loop for arrays

// for (let studentObj of student) {
//     console.log(`${studentObj.name} is ${studentObj.age} years old.`); // prints each student's name and age
    
// Object destructuring


// for(const val of obj) {
//     console.log(val); // This will not work as expected because 'obj' is not iterable
// }

for(const val of student) {
    console.log(val); // This will work as expected because 'student' is an array
}

// for(const val in obj) {
//     console.log(`${val}: ${obj[val]}`); // prints each key-value pair
// }
let arr2 = [1, 2, 3, 4, 5];
// spread
let newarr2 = [arr2, ...arr2]; // spreads the elements of arr2 into newarr2 
console.log(newarr2); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] (new array with elements of arr2 spread)

let newobj = { ...obj, ...obj1 }; // spreads the properties of obj and obj1 into newobj 
console.log(newobj); // { name: "Vishal Kumar", age: 30, city: "New York" } (new object with properties of obj and obj1 spread)

// destructuring objects
let { name, age, city } = obj; // destructures properties from obj

