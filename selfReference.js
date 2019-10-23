'use strict';

let person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName: function(){
          return this.firstName + ' ' + this.lastName;
      },
};

console.log(person.fullName());
