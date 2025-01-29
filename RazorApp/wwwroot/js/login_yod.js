function validate_login() {
    check_username();
    return false;
}

function check_username() {
    var username = document.getElementById("Username").value;
    var msg = document.getElementById("UsernameMsg");

    if (username == "") {
        msg.innerHTML = "You must enter user name !!!"
    }
    else {
        msg.innerHTML = "";

    }


}
