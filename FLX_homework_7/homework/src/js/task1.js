<<<<<<< HEAD
let userLogin = prompt('Please eneter your login', '');
let currentTime = new Date().getHours();
if (userLogin) {
    if (userLogin.length < 4) {
        alert('I don’t know any users having name length less than 4 symbols');
    } else if (userLogin === 'User' || userLogin === 'Admin') {
        let userPassword = prompt('Please eneter your password', '');
        if ((userLogin === 'User' && userPassword === 'UserPass') ||
        (userLogin === 'Admin' && userPassword === 'RootPass')) {
            if (currentTime < 20) {
                alert(`Good day, dear ${userLogin}!`);
            } else {
                alert(`Good evening, dear ${userLogin}!`);
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you');
    }
} else {
    alert('Canceled.');
=======
let userLogin = prompt('Please eneter your login', '');
let currentTime = new Date().getHours();
if (userLogin) {
    if (userLogin.length < 4) {
        alert('I don’t know any users having name length less than 4 symbols');
    } else if (userLogin === 'User' || userLogin === 'Admin') {
        let userPassword = prompt('Please eneter your password', '');
        if ((userLogin === 'User' && userPassword === 'UserPass') ||
        (userLogin === 'Admin' && userPassword === 'RootPass')) {
            if (currentTime < 20) {
                alert(`Good day, dear ${userLogin}!`);
            } else {
                alert(`Good evening, dear ${userLogin}!`);
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don’t know you');
    }
} else {
    alert('Canceled.');
>>>>>>> 58b1c3e411670f69ec04dbc127d30e4d17c613ed
}