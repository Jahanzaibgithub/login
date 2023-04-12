//  first method object

var a = {
    fname: 'Jahanzaib',
    lname: 'khan',
    email: 'jahanzaibkhan081@gmail.com',

    // object in object
    favMovies: ['dhoom', 'sholay', 'hum'],
    salary: function() {
        return 25000;
    },
    fullname: function() {
        return this.fname + " " + this.lname;
    }
}

console.log(a);
document.write(a.salary());





// 2nd method Object

var person = new Object();

person.firstName = 'Jahanzaib';
person.lastName = 'khan';
person.age = 23;

console.log(person);
document.write(person.age)