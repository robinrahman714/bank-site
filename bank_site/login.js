document.getElementById('login-submit').addEventListener
( 'click' , function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user password
    const  passwordField = document.getElementById
    ('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'avaliduser@gmail.com' && userPassword == 'password'){
        window.location.href = 'banking.html';
        // console.log('valid user');
    }
})