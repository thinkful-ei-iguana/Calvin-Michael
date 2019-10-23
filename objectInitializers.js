'use strict';

let loaf = {
    flour: 300,
    water: 210
};

// console.log(loaf.flour, loaf.water);

let {flour, water} = loaf;

let hydrationLevel = { 
    hydration: function(flour, water){
        return flour / water * 100;},
};

// console.log(hydrationLevel);

Object.assign(loaf, hydrationLevel);

console.log(loaf.hydration(flour,water));

