'use strict'
const sum = (...args) =>{
    let val = 0;
    let i = 0;
    do {
        val += args[i];
        i++
    } while ( i < args.length)
        return val
}
const d = sum(1, 14, 81);
console.dir(d);
