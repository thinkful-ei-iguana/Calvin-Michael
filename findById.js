'use strict';

//Spend up to 15 minutes writing a function called findById.
//This function takes 2 arguments, items and idNum. items is
//an array of objects. idNum is the id we're trying to find 
//in items. The function should look for an item with the id
// idNum in the array items. If found, it should return that item.

const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];

  
  function findById(items, idNum) {
    // your code here
    for(let i = 0; i < items.length; i++){
        if (items[i].id === idNum){
            return items[i].foo;
        }
    }
}
console.log(findById(scratchData, 22));
  