'use strict'
function inc(n){
return ++n;
}

const a = 3;
const b = inc(a);
console.dir({a, b});