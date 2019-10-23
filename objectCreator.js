'use strict';
const foo = 'bar';
const answerToUniverse = 42;
const sayHello = function(){return 'hello';};

function createObject(){
    return  {
        foo,
        answerToUniverse,
        'olly olly': 'oxen free',
        sayHello: sayHello(),
    };
}

console.log(createObject());
