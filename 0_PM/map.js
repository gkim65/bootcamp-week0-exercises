const assert = require('assert')

/**
 * Complete the implementation of the following functions so that
 * the output is [0, 3, 6, 9, 12].
 */

// TODO
const triple = (el) => {
    return (el*3);
};

// TODO
Array.prototype.map = function(fun) {
    let newArr = [];
    this.forEach(el => {
        newArr.push(fun(el));
    })
    return newArr;
};

const arr = [0, 1, 2, 3, 4];
const solution = [0, 3, 6, 9, 12];

assert(arr.map(triple).every((v, i) => v === solution[i]))
