'use strict';

let meals = ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

let object1 = {
    meals,
};

for(const key in object1){
    const value = object1[key];
    console.log(value[3]);
}

