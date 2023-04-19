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
loginButton.addEventListener('click', async (event) => {

  // Prevent page from reloading cause bad :(
  event.preventDefault();

  const emailCondition = 'email = \'' + document.getElementById('login_email').value + '\'';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'student', columns: '*', condition: emailCondition })
  };

const sqlData = await fetch('http://localhost:3000', requestOptions)
    .then(response => response.json())
    .then(data => {return data;})
    .catch(error => console.log(error));

  if(sqlData.length == 1) {
    localStorage.setItem("f_name", sqlData[0]['first_name']);
    localStorage.setItem("l_name", sqlData[0]['last_name']);
    window.location.href = 'index.html';
  }
  else
    alert('Please enter a valid email.');

});

signupButton.addEventListener('click', () => {
  
  // Redirect to index.html
  window.location.href = 'index.html';

});

