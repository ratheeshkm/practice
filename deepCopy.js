const testObj = {
  id: "1",
  name: [],
  address: {
    line1: "test1",
    line2: "test2",
    line3: {
      test: "123"
    }
  }
};
console.log(testObj);

var copyObj = {};
const deepCopy = (testObj) => {
  for(let key in testObj) {
    if(testObj.hasOwnProperty(key)) {
      if(typeof testObj[key] !== 'object') {
        copyObj[key] = testObj[key]
      } else if(Array.isArray(testObj[key])) {
        copyObj[key] = [...testObj[key]] 
      } else if(typeof testObj[key] === 'object') {
        deepCopy(testObj[key])
      }
    }
  }
}


console.log(testObj)
