const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" ")
};



// TODO - write a function which reverses the string
const reverse = str => {
    return str.split("").reverse().join("")
};


// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    const newSet = new Set(arr);
    return [...newSet];
};


// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    let fact = 1;
    while (num > 0) {
        fact = fact * num;
        num--;
      }
    return fact
};


// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        const combined = [];
        for (i = 0; i < arr1.length; i++) {
            combined[i] = [arr1[i],arr2[i]];
        }
        return combined;
    }else{
        return -1;
    }
};


// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let arr1 = [];
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        arr1[i] = arr[i][0];
        arr2[i] = arr[i][1];
    }
    
    return [arr1, arr2];
    };


// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    return "".concat(str.substring(num-1, str.length),str.substring(0, num-1));
};


// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth()); //January is 0!
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let ampm = "AM"
    if (hours>=12){
        ampm = "PM";
        if (hours>12){hours = hours-12;}
    }
    if (hours == 0){hours = 24}
    let minutes = today.getMinutes();
    return(`Today's date is ${months[mm]} ${dd} +`, `+ yyyy + `. It is `+ hours + `:`+ minutes+ ` `+ampm);
};



// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("this is df"))
console.log(reverse("I am food"))
console.log(uniqueOnes([1,1,1,2,2,2,3,3,1,3]))
console.log(factorial(3))
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip(zip([1, 2, 3], [5, 3, 1])));
console.log(shiftRight("Hello", 3))
console.log(announceDate());