'use strict';

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
// --The old way--

//   function keyDeleter(obj) {
//     // your code here
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
//   }

const {foo, bar, bizz, bang} = sampleObj;

const newObj = {
    bizz,
    bang,
};

console.log(newObj);