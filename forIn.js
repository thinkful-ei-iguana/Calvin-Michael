'use strict';

let quux = 'something interesting';

let object1 = {
    foo: 'string',
    bar: 23485,
    fum: function(){return console.log('Do something.');},
    quux,
    'spam ': 'just some spam',
};

for(const key in object1){
    const value = object1[key];
    console.log(key, value);
}


