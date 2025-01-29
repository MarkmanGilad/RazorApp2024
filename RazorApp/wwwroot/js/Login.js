function validate_login() {
    //alert("validate");
    res = true
    res = check_username()

    return res


}

function check_username() {
    var username = document.getElementById("Username").value 
    var msg = document.getElementById("UsernameMsg")
    //alert (username)
    if (username == "") {
        msg.innerHTML = "You must enter user name"
        return false;
    } else {
        msg.innerHTML = "";
        return true;
    }
    
}