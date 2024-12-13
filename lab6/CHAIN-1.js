function pipe(...fns) {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new Error('Error');
    }

  return function(initialValue) {
      return fns.reduce((val, fn) => fn(val), initialValue);
  };
                     }

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

try {
  const f1 = pipe(inc, twice, cube);
  const x1 = f1(5);
  console.log(x1);
  } catch (e) {
  console.error(e);
}

try {
  const f2 = pipe(inc, inc);
  const x2 = f2(7);
  console.log(x2);
} catch (e) {
  console.error(e);
}

try {
  const f3 = pipe(inc, 7, cube);
  } 
  catch (e) {
  console.error(e);
  }