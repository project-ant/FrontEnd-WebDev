// Store Mark's and John's Mass and Height in Variables
// BMI = mass / height**2
// boolean Marh > John
// Give output in a string

let Mark_height = 186;
let Mark_mass = 70;

let John_height = 180;
let John_mass = 65;

const BMI_Mark = Mark_mass / (Mark_height**2);
const BMI_John = John_mass / (John_height**2);

console.log('Apakah BMI Mark lebih besar daripada BMI John?')

let hasil = console.log (BMI_Mark > BMI_John);

let print = hasil === hasil ? "Mark memiliki BMI lebih besar daripada John" : "John memiliki BMI lebih besar daripada Mark";

console.log(print)