// For Loop

for (var a = 1; a <= 10; a++) {
    document.write("Khan Baba");
}


// While Loop
var a = 10;
while (a <= 100) {
    document.write("Khan Baba");
    a = a + 1;
}

// DoWhile Loop

var a = 1;
do {
    document.write("Khan Baba");
    a++;
} while (a <= 10)

// For Loop
for (var a = 1; a <= 10; a++) {
    document.write("Khan baba");
}

// Break and Countinue Statement
for (var a = 1; a <= 10; a++) {
    if (a == 3) {
        document.write("Hi : " + a + "<br>");
        break; //    continue; one use 
    }
    document.write("Yes : " + a + "<br>");
}


// Even NUmbers

for (var a = 1; a <= 100; a++) {
    if (a % 2 == 0) {
        document.write(a + "<br>");
    }
}

// Odd Number

for (var a = 1; a <= 100; a++) {
    if (a % 2 != 0) {
        document.write(a + "<br>");
    }
}

// Nested Loop

for (var a = 1; a <= 100; a = a + 10) {
    for (var b = a; b < a + 10; b++) {
        document.write(b + " ");
    }
    document.write("<br>");
}