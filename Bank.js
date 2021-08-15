document.getElementById('login-submit').addEventListener('click', function(){
    //catching input email value
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    //catching input password value
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    //validation check
    if(userEmail == "baperbank@omuktomuk.com" && userPassword == "amarbank"){
        window.location.href = 'Banking.html';
    }
})

