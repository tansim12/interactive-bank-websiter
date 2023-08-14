document.querySelector('#submit-btn').addEventListener('click', function name(params) {
    const getUserEmail = document.querySelector('#user-email');
    const getUserEmailValue = getUserEmail.value;
    getUserEmail.value = '';


    const getUserPassword = document.querySelector('#user-password');
    const getUserPasswordValue = getUserPassword.value;
    getUserPassword.value = '';
    

    if ( getUserEmailValue === 'tansimahmedtasjid@gmail.com' && getUserPasswordValue === '5656') {
        window.location.href ='bank.html'
    }
    
    else {
        alert('invalid user');
    }

    // console.log(getUserEmailValue, getUserPasswordValue);
    
})