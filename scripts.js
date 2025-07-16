function totalsum(parameter){
    console.log(parameter );
}

function sum(a, b) {
    let sums = a + b;
    console.log(sums);
}
function sum2(a, b) {
    let sums = a + b;
    return sums;
}

// number
let num = 10;
console.log(num.toFixed(2)); // 10.00
console.log(num.toPrecision(3)); // 10.0

let number = new Number(29);
console.log(typeof number); // object
console.log(number.toString()); // "10" 
console.log(number.toPrecision(5)); // "29.000"

// string
let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"
console.log(str.charAt(0)); // "H"
console.log(str.indexOf("World")); // 6
console.log(str.slice(0, 5)); // "Hello"
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"  
console.log(str.length); // 11
console.log(str.trim()); // "Hello World" (removes whitespace from both ends)

console.log(str.match(/Hello/)); // ["Hello"]
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true
console.log(str.includes("World")); // true
console.log(str.search("World")); // 6
console.log(str.localeCompare("Hello World")); // 0 (same string)
console.log(str.repeat(2)); // "Hello WorldHello World"
console.log(str.concat("!")); // "Hello World!"

console.log(str.padStart(15, "*")); // "***Hello World"
console.log(str.padEnd(15, "*")); // "Hello World***"
console.log(str.codePointAt(0)); // 72 (Unicode code point of 'H')
console.log(str.normalize()); // "Hello World" (normalizes Unicode string)
console.log(str.valueOf(3)); // "Hello World" (returns the primitive value of the string)
console.log(str.toLocaleLowerCase()); // "hello world" (locale-specific lower case)
console.log(str.toLocaleUpperCase()); // "HELLO WORLD" (locale-specific upper case)
console.log(str.toString()); // "Hello World" (converts to string)
console.log(str.lastIndexOf("o")); // 7 (last occurrence of 'o')

// boolean
let bool = true;
console.log(bool.toString()); // "true"
console.log(bool.valueOf()); // true (returns the primitive value of the boolean)
console.log(bool && false); // false (logical AND)
console.log(bool || false); // true (logical OR)
console.log(!bool); // false (logical NOT)
console.log(bool ? "Yes" : "No"); // "Yes" (ternary operator    ) 
console.log(bool === true); // true (strict equality)
console.log(bool !== false); // true (strict inequality)
console.log(bool.toLocaleString()); // "true" (locale-specific string representation)

console.log(bool.valueOf()); // true (returns the primitive value of the boolean)
console.log(bool.toString()); // "true" (converts to string)
console.log(bool.toExponential(2)); // "1.00e+0" (exponential notation)
console.log(bool.toFixed(2)); // "1.00" (fixed-point notation)
console.log(bool.toPrecision(2)); // "1.0" (precision notation)
console.log(bool.toLocaleString()); // "true" (locale-specific string representation)                      


// Math
let min = 10;
let max = 20;
console.log(Math.min(min, max)); // 10 (minimum value)
console.log(Math.max(min, max)); // 20 (maximum value)
console.log(Math.abs(-5)); // 5 (absolute value)
console.log(Math.ceil(4.2)); // 5 (rounds up)
console.log(Math.floor(4.8)); // 4 (rounds down)
console.log(Math.round(4.5)); // 5 (rounds to nearest integer)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
console.log(Math.PI); // 3.141592653589793 (value of π)
console.log(Math.E); // 2.718281828459045 (value of e)
console.log(Math.log(10)); // 2.302585092994046 (natural logarithm)
console.log(Math.log10(100)); // 2 (base-10 logarithm
console.log(Math.sin(Math.PI / 2)); // 1 (sine of π/2)
console.log(Math.cos(0)); // 1 (cosine of 0)
console.log(Math.tan(Math.PI / 4)); // 1 (tangent of π/4)
console.log(Math.asin(1)); // 1.570796326794896 (inverse sine of 1)
console.log(Math.acos(1)); // 0 (inverse cosine of 1)
console.log(Math.atan(1)); // 0.785398163397948 (inverse tangent of 1)
console.log(Math.atan2(1, 1)); // 0.785398163397948 (inverse tangent of y/x)
console.log(Math.hypot(3, 4)); // 5 (hypotenuse of a right triangle with sides 3 and 4)
console.log(Math.clz32(0)); // 32 (number of leading zero bits in 32-bit integer)
console.log(Math.imul(2, 3)); // 6 (integer multiplication)
console.log(Math.sign(-5)); // -1 (sign of -5)
console.log(Math.trunc(4.9)); // 4 (truncates decimal part)
console.log(Math.cbrt(27)); // 3 (cube root of 27)
console.log(Math.log2(8)); // 3 (base-2 logarithm)
console.log(Math.log1p(0.718281828459045)); // 0.618281828459045 (natural logarithm of 1 + x)
console.log(Math.expm1(1)); // 2.718281828459045 (exponential of 1)
console.log(Math.sinh(0)); // 0 (hyperbolic sine of 0)
console.log(Math.cosh(0)); // 1 (hyperbolic cosine of 0)
console.log(Math.tanh(0)); // 0 (hyperbolic tangent of 0)
console.log(Math.asinh(0)); // 0 (inverse hyperbolic sine of 0)
console.log(Math.acosh(1)); // 0 (inverse hyperbolic cosine of 1)
console.log(Math.atanh(0)); // 0 (inverse hyperbolic tangent of 0)
console.log(Math.fround(1.5)); // 1.5 (single-precision floating-point representation)
console.log(Math.scale(1, 0, 10, 0, 100)); // 10 (scales a number from one range to another)
console.log(Math.imul(2, 3)); // 6 (integer multiplication)
console.log(Math.seedrandom(12345)); // "0.123456789" (sets the seed for random number generation)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * (max - min) + min); // random number between min and max
console.log(Math.random().toFixed(2)); // random number between 0 and 1 with 2 decimal places
console.log(Math.random().toPrecision(3)); // random number between 0 and 1 with 3 significant digits
console.log(Math.random().toExponential(2)); // random number in exponential notation with 2 decimal places
console.log(Math.random().toFixed(2)); // random number in fixed-point notation with 2 decimal



// date
