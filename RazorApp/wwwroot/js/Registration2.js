function formVal() {
    var res = userNameVal();
    res = phoneVal() && res; 
    
    return res;
}


function userNameVal() {
    var un = document.getElementById("username");
    var uName = un.value;
    var msg = document.getElementById("userNameMsg");
    
    if (uName.length == 0) {
        msg.innerHTML = "You must enter username";
        return false;
    }
    msg.innerHTML = "";
    return true;

}

function phoneVal() {
    var ph = document.getElementById("Phone").value;
    var msg = document.getElementById("phoneMsg");

    var reg = /^0{1}(2|3|4|6|8|9|5[0|(2-8)]|73)-?[1-9]\d{6}$/;
    if (!reg.test(ph)) {
        msg.innerHTML = "The phone is not valid";
        return false;
    }
    msg.innerHTML = "";
    return true;
}