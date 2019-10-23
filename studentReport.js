'use strict'
let data = [
  {name: 'John', grade: 'C'},
  {name: 'Bob', grade: 'D'},
  {name: 'Jerry', grade: 'B'},
  {name: 'Sarah', grade: 'D'},
  {name: 'Clarrisse', grade: 'A'},
];


function makeStudentsReport(data) {
  const reports = [];
  for(let i = 0; i < data.length; i++) {
    const item = data[i];
    reports.push(`${item.name}: ${item.grade}`);
  }
  return reports;
}
console.log(makeStudentsReport(data));