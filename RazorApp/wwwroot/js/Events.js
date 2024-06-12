
function clickFunc() {
    alert("onclick");
}


function phoneValidate() {
    alert("event was fired - onchange");
}

function funSelect() {
    alert("change was made in select");
} 

function keyPressFun(event) {
    alert("key: " + event.key + ",  keyCode:" + event.keyCode);
    if (event.key <= "0" || event.key >= "9") {
        alert("not digit");
        return false;
    } else
        alert("digit");
    return true;
}
