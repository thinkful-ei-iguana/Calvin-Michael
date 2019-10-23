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


function secondObject(){
    return{
        foo: 'foo',
        bar: 'bar',
        bizz: 'bizz',
        bang: 'bang',
    };
}

let newProp = Object.assign({},createObject(),secondObject());
console.log(createObject());
console.log(secondObject());
console.log(newProp);