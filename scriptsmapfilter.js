// rest operator
function sum3(...args) {
    let total = args.reduce((acc, curr) => acc + curr, 0);
    
    console.log(total);

    return total;
}

sum3(1, 2, 3, 4, 5); // 15 (sums all arguments)
// arrow functionls

// destructuring operators
let obj2 = {
    name1: "Vishal Kumar",
    age: 19,
    city: "New York"
};
let { name1, age, city } = obj2; // destructuring object properties
console.log(name1); // "Vishal Kumar"
console.log(age); // 19
console.log(city); // "New York"    
console.log(name1, age, city); // "Vishal Kumar 19 New York"    
console.log(name1.toUpperCase()); // "VISHAL KUMAR" (converts name to uppercase)
console.log(age + 5); // 24 (adds 5 to age)

// destructuring array 
function objectFunction({ name, age, city }) {
    // destructuring object properties in function parameters

    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    
}
objectFunction(obj2); // "Name: Vishal Kumar, Age: 30, City: New York"


let obj = {
    name: "Aman",
    age: 25,
    city: "Delhi",
    // function to greet
    greet: function() {
        // using 'this' to access object properties
        console.log(`Hello, my name is ${this.name}`);
        console.log(`And, my age is ${this.age}`);
        console.log(`And, my City is ${this.city}`);
    }
};
obj.greet(); // "Hello, my name is Aman", "And, my age is 25", "And, my City is Delhi"

// on array
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newArr = [...arr, ...arr2]; // using spread operator to merge arrays
console.log(newArr);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (merged array)
console.log(arr.length); // 5 (length of the array)
console.log(arr[0]); // 1 (first element)
console.log(arr[2]); // 3 (third element)
console.log(arr.indexOf(3)); // 2 (index of element 3)
console.log(arr.includes(4)); // true (checks if 4 is in the array)


// Methods on array
let arr3 = [1, 2, 3, 4, 5];
arr3.push(6); // adds 6 to the end of the array
console.log(arr3.length); // 6 (length after push)
arr3.pop(); // removes the last element
console.log(arr3.length); // 5 (length after pop)
console.log(arr3.shift()); // 1 (removes the first element)
console.log(arr3);
console.log(arr3.length); // 4 (length after shift)
arr3.unshift(0); // adds 0 to the beginning
console.log(arr3.length); // 5 (length after unshift)

console.log(arr3);

// forEach method
arr3.forEach( function(value) {
    console.log(value); // prints each element)
}
)


let array = [1, 2, 3, 4, 5];

let doubledArray = array.map(function(value) {
    return value; // returns each element
})

console.log(doubledArray); // [1, 2, 3, 4, 5] (original array)

console.log("New function with arrow function");
// arro fun
 let newArray = array.map((value) => {
    return value * 2; // doubles each element
});
console.log(newArray); // [2, 4, 6, 8, 10] (doubled array)  

// Filter method
let filteredArray = array.filter((value) => {
    if(value > 2) {
        return value; // returns elements greater than 2
    }
});
console.log(filteredArray); // [3, 4, 5] (filtered array)


// Reduce method
let reducedValue = array.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue; // sums all elements
})
console.log(reducedValue); // 15 (sum of all elements)

// Find method
let foundValue = array.find((value) => {
   return value > 3; // finds first element greater than 2
});
console.log(foundValue); // 4 (first element greater than 3)

// filter on string array
let stringArray = ["apple", "banana", "cherry", "date"];
let filteredStringArray = stringArray.filter((value) => {
    return value.startsWith("b"); // filters strings starting with 'b'
});
console.log(filteredStringArray); // ["banana"] (filtered string array)

