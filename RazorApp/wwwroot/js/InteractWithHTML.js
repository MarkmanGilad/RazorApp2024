
function btnChange() {
    //document.write("document write");

    var div = document.getElementById("myDiv");
    div.innerHTML = "<p> New content </p>"
    //document.getElementById("myDiv").innerHTML = "<p> New content </p>";

}

function changeStyle() {
    var div = document.getElementById("myDiv");
    div.style.color = "red";
    div.style.backgroundColor = "blue";
    div.style.border = "solid 3px black";
    div.style.verticalAlign = "center";
}

function toggleColor() {
    var div = document.getElementById("myDiv");
    if (div.style.color == "red") {
        div.style.color = "blue";
        div.style.backgroundColor = "red";
    }
    else {
        div.style.color = "red";
        div.style.backgroundColor = "blue";
    }
        
    
}

function selectFun() {

    var select = document.getElementById("colors");


    var div = document.getElementById("div2");

    var myDiv = document.getElementById("myDiv");

    var i = select.selectedIndex;
    var color = select.options[i].value;
    div.innerHTML = "select index= " + i;
    div.innerHTML = div.innerHTML + "  item = " + color;
    myDiv.style.backgroundColor = color;
}