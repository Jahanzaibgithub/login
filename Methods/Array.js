let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
console.log(car1, car2, car3);


const cars = ["Carola", "BMW", "swift"];
console.log(cars);

// Arrays of object

var student = [
    { name: 'Jahanzaib', age: 24 },
    { name: 'Shahzaib', age: 26 },
    { name: 'bilal', age: 29 },
];

console.log(student);

// loop with Array
const todos = [{
        id: 1,
        text: 'Take out Trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        iscompleted: true

    },
    {
        id: 3,
        text: 'Dentist Appt.',
        iscompleted: false

    },
];

// ForEach

todos.forEach(function(todos) {
    console.log(todos.text);
});

// Filter

const todoCompleteted = todos.filter(function(todos) {
    return todos.iscompleted === true;
});

// Map

Map(function(todos) {
    return todos.text;
});
console.log(todos(isCompleted));

// forEach Loop

var a = ["Jahanzaib", "Khan", "Baba"];

a.forEach(function(value) {
    console.log(value);
});

// concat array

var a = ["Ali", "bilal", "noman"];
var b = ["Zaib", "Khan"];
var c = a.concat(b);
console.log(c);

// Join array

var a = ["Ali", "bilal", "noman"];
var b = ["Zaib", "Khan"];
var a = b.join(" / ");
console.log(c);