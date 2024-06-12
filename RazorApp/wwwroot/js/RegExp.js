
function chkText() {
    var text = document.getElementById("txt").value;
    var msg = document.getElementById("msg");
    var reg;
    reg = /^[A-Z]/;
    //reg = /\s/;
    //reg = /^0\d{9}[abc]$/;
    //var str1 = "12334";
    //var i = str1.length;
    //reg = /^[a-zA-Z]{1}[a-zA-Z0-9]+@[a-zA-Z]{2,4}\.[a-zA-Z]{2,3}$/; 
    //reg = /^[a-zA-Z]+[\w!@#$%^&*+?<>~-]{1,}$/;  // username
    //reg = /^[A-Za-zb0-9]+$/;
    //reg = /\D/;
    //reg = /[a-Z]/;

    if (reg.test(text) == true) {
        msg.innerHTML = "True";
        
    }
    else {
        msg.innerHTML = "False";

    }
    return false;
        
}

