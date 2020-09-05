let objArray = [
  {
    id: 1,
    name: "Ratheesh - 1"
  },
  {
    id: 2,
    name: "Ratheesh - 2"
  },
  {
    id: 3,
    name: "Ratheesh - 3"
  },
  {
    id: 4,
    name: "Ratheesh - 4"
  },
  {
    id: 5,
    name: "Ratheesh - 5"
  }
];

/*
const deleteElement = (id, arr) => {
  let objArr = arr.slice(0);
  let deleted = false;
  for(let i=0; i < objArr.length; i++) {
    if(i === id-1) {
      objArr.splice(i, 1);
      deleted = true;
    }
    if(deleted && objArr[i]) {
      objArr[i].id = i + 1;
    }
  }
  return objArr;
}
*/

const deleteElement = (id, arr) => {
  return arr.filter((item, index) => index !== id-1)
            .filter((item, index) => item.id = ++index )
}

console.log(objArray)
console.log(deleteElement(2, objArray));
