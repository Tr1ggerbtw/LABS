'use strict'
const sum = (...args) => {
    let val = 0;
    for (let i = 0; i < args.length; i++) {
      val += args[i];
    }
    return val;
  };
  const a = val(1, 2, 3);
  console.log(a);