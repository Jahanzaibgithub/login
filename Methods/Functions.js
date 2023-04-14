function hello() {
    document.write("Welcome EveryBody");
}

hello;

// Do Function ek sath

function yes() {
    document.write("Welcome Yes!");
}

function no() {
    document.write("Welcome No!");
}

yes();
no();

// Function with Parameter

function hello(fname = "Jahan", lname = "Zaib") {
    document.write("Hello" + fname + " " + lname);
}

function sum(a, b); {
    document.write(a + b);
}

hello("No", "Man");
hello("Zaibi", "khan");
sum(20, 30);