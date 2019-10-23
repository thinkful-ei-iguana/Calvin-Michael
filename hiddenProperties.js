'use strict';

const person1 = {name: 'John', title: 'Engineer', boss: 'Derek'};
const person2 = {name: 'Suzie', title: 'Podiatrist'};
const person3 = {name: 'Karen', title: 'Cardiologist'};

// console.log(person1);

const allPeople = [person1, person2, person3];
// console.log(allPeople);

for (let i = 0; i < allPeople.length; i++){
    if (allPeople[i].boss){
    console.log(`${allPeople[i].title} ${allPeople[i].name} reports to ${allPeople[i].boss}`);
    }
    else console.log(`${allPeople[i].title} ${allPeople[i].name} doesn't report to anybody.`);
}