'use strict'

const sum = (...args) =>{
   return args.reduce((accumulator, val) => accumulator + val, 0);
}
const e = sum(1, 52, 4);
console.dir(e);

