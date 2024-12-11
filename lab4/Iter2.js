'use strict'
const sum = (...args) => {
    let val = 0;
    for (const arg of args) val += arg;
    return val;
  };
  const b = sum(2, 3, 4);
  console.log(b);