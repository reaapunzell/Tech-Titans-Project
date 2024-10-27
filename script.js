
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    
    if (username && email && password) {
        console.log('Sign Up:', {
            username,
            email,
            password
        });
        
        alert('Sign Up successful!');
    } else {
        alert('Please fill in all fields.');
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    
    if (email && password) {
        console.log('Login:', {
            email,
            password
        });
    
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('money-icon').addEventListener('click', function() {
    this.classList.add('shake');
    setTimeout(() => {
        this.classList.remove('shake');
    }, 500);
});
