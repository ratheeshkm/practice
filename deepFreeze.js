const myObj = {
  a: 1,
  b: 'hello',
  c: [0, 1, 2],
  d: { e: 1, f: 2 }
};

const deepFreez = (obj) => {
  Object.keys(obj).forEach(function(item) {
    if(typeof obj[item] === 'object' && !Object.isFrozen(obj[item])) {
      deepFreez(obj[item])
    }
    return obj;
  });

  return Object.freeze(obj)
}
const freezedObj = deepFreez(myObj);
//freezedObj.d.e = 10;
console.log(freezedObj)
