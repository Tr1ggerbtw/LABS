'use strict'

let length = Math.floor(Math.random() * 100) + 1;
const generateKey = (length, possible) => {
    let key = [];
    for (let i = 0; i < length; i++) {
      key.push(possible.charAt(Math.floor(Math.random() * (possible.length - 1))));
    }
    return key.toString().replaceAll(",", "");
  };
  
  console.log(generateKey(length, 'abcdefghijklmnopqrstuvwxyz0123456789'));
