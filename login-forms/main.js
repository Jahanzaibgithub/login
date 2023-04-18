var name_error = document.getElementById('name_error');
var pass_error = document.getElementById('pass_error');


function validation(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username.length < 9 || username >= 14) {
        name_error.style.display = "block";
        // username.focus();
        return;
    } else {
        name_error.style.display = "none";
    }

    if (password.length < 6 || password >= 8) {
        pass_error.style.display = "block";
        // password.focus();
        return;
    } else {
        pass_error.style.display = "none";
    }



    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

}