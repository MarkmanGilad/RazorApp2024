function validate_login() {
    //alert("validate");
    check_username()

    return false


}

function check_username() {
    var username = document.getElementById("Username").value 
    var msg = document.getElementById("UsernameMsg")
    //alert (username)
    if (username == "") {
        msg.innerHTML = "You must enter user name"

    } else {
        msg.innerHTML = "";
    }
    
}