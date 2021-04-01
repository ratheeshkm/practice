// map using reduce
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callBack, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callBack.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

const reducerCallback = (currentValue, index, array) =>
  currentValue + index + array.length;

console.log([1, 3, 5, 7].mapUsingReduce(reducerCallback));
