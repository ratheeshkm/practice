const distance = (from, to) => Math.abs(from - to);
const reducerFn = (num) => {
  return (acc, curr) => distance(num, curr) < distance(num, acc) ? curr : acc;
}

const closestTo = (arr, num) => {
  if(arr.length === 0) return num;
  return arr.filter(x => x !== num)
            .reduce(reducerFn(num), arr[0])
}

console.log(closestTo([-1, 0, 0, 5, -5, 6, -3, 2, 10, 13, 8, 70, -36, 36], 0));



function calculateClosestTo0 (arr) {
    let closest = 0
    for (let i = 0; i < tempArray.length ; i++) {
        if (closest === 0) {
            closest = arr[i]
        } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
            closest = arr[i]
        } else if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
            closest = arr[i]
        }
    }
    return closest
}
