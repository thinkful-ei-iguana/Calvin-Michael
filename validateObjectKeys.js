'use strict';

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const objectC = {
  id: 17,
  name: 'Hopps',
  favoriteFood: 'Pizza',
  age: 30,
  city: 'Denver',
};

const expectedKeys = ['id', 'name', 'age', 'city'];
  
function validateKeys(object, hi) {
  if (Object.keys(object).length !== hi.length) {
    return false;
  } else return true;
}
console.log(validateKeys(objectA, expectedKeys));
//console.log(Object.keys(objectC).length, (expectedKeys).length);