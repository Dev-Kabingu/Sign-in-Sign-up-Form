const signInButton =document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');
const SignInForm = document.getElementById('signIn');
const SignUpForm = document.getElementById('signUp');

// adding event listener 
signUpButton.addEventListener('click',function(){
    SignInForm.style.display="none";
    SignUpForm.style.display="block";
})

signInButton.addEventListener('click', function(){
    SignInForm.style.display = 'block';
    SignUpForm.style.display = 'none';
})