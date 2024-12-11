'use strict';

const sum = (...args) => {
    let val = 0;
    let i = 0;
    while (i < args.length) {
        val += args[i];
        i++;
    }
    return val;
};

const c = sum(54, 14, 1507);
console.log(c);