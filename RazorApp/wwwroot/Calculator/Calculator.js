var prevNumber = 0;
var prevOperand = "";

function digit(e) {
    var lbl = document.getElementById("lbl");
    lbl.innerHTML = lbl.innerHTML + e.value;
    if (e.value != ".") {
        lbl.innerHTML = Number(lbl.innerHTML);
    }

    //alert(e.value);
}

function operand(e) {
    var lbl = document.getElementById("lbl");
    var operTd = document.getElementById("operTd");
    var oper = e.value;
    switch (oper) {
        case "x":
        case "+":
        case "/":
        case "-":
            if (prevOperand != "")
                calculate();
            prevNumber = Number(lbl.innerHTML);
            lbl.innerHTML = "0";
            prevOperand = oper;
            operTd.innerHTML = prevNumber + " " + oper;
            break;
        case "AC":
            prevNumber = 0;
            lbl.innerHTML = "0";
            prevOperand = "";
            operTd.innerHTML = "";
            break;
        case "=":
            calculate();
            prevNumber = Number(lbl.innerHTML);
            prevOperand = "";
            operTd.innerHTML = prevNumber;
            break;
        case "+/-":
            lbl.innerHTML = Number(lbl.innerHTML) * (-1);
            break;
        case "%":
            lbl.innerHTML = RoundReal(Number(lbl.innerHTML) / 100);
            break;
    }
   
    return false;
}

function dell(e) {
    var lbl = document.getElementById("lbl");
    var ctx = lbl.innerHTML;
    lbl.innerHTML = ctx.slice(0, -1);
}

function calculate() {
    var lbl = document.getElementById("lbl");
    //var operTd = document.getElementById("operTd");
    var number = Number(lbl.innerHTML);
    var res;
    switch (prevOperand) {
        case "x":
            res = prevNumber * number;
            break;
        case "+":
            res = prevNumber + number;
            break;
        case "-":
            res = prevNumber - number;
            break;
        case "/":
            res = prevNumber / number;
            break;
        default:
            res = prevNumber;
    }
    res = RoundReal(res);
    lbl.innerHTML = res;
    prevNumber = res;

}

function RoundReal(num) {
    return Math.round(num * 1000000000) / 1000000000;
}

