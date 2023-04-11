// Signup and Login buttons
const signupSlideButton = document.getElementById('signup-button'),
    loginSlideButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms'),
    loginButton = document.getElementById('form_login-btn'),
    signupButton = document.getElementById('form_signUp-btn');

/*
 * Add event listener to the "Sign Up" button
 */
signupSlideButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/*
 * Add event listener to the "Login" button
 */
loginSlideButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

/*
* Add event listener to the "Form Submission Login" button
*/
loginButton.addEventListener('click', () => {
  
  // Redirect to index.html
  window.location.href = 'index.html';

});

signupButton.addEventListener('click', () => {
  
  // Redirect to index.html
  window.location.href = 'index.html';

});



