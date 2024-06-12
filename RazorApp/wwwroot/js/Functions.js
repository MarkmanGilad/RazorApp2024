function printHello() {
    document.write("Hello World");
}

function Squared(num) {
    document.write(num + "<sup>2</sup> = ")
    document.write(num * num);
}

function exponent(base, power) {
    var res = 1;
    for (var i = 1; i <= power; i++) {
        res = res * base;
    }
    return res;
}

function exponent1(base, power) {
    var res = base;
    for (var i = 2; i <= power; i++) {
        res = res * base;
    }
    return res;
}

function printExp() {
    var b = prompt("Enter base");
    var p = prompt("Enter power");
    var result = exponent1(b, p);
    document.write(b + "<sup>" + p + "</sup> = " + result);
}

function add(a,b) {

    document.write(a + b);  

}

function power(a, b) {
   
    var res = 1;
    for (var i = 1; i <= b; i++ ) {
        res = res * a;
    }

    return res;

}


//Main

var num1 = parseInt(prompt("Enter number 1"));
var num2 = parseInt(prompt("Enter number 2"));

document.write(power(num1, num2));

// כתוב תוכנית הקולטת שני מספרים, וקוראת לפונקציה שמחשבת ומדפיסה את הסכום שלהם.



