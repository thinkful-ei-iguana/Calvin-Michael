'use strict';

const person1 = {name: 'John', title: 'Engineer'};
const person2 = {name: 'Suzie', title: 'Podiatrist'};
const person3 = {name: 'Karen', title: 'Cardiologist'};

// console.log(person1);

const allPeople = [person1, person2, person3];
// console.log(allPeople);

for (let i = 0; i < allPeople.length; i++){
    console.log(`${allPeople[i].name} is a ${allPeople[i].title}`);
}