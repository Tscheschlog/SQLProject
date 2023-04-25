const appIcon = document.querySelector('.app-icon');
const appSidebar = document.querySelector('.app-sidebar');
const appContent = document.querySelector('.app-content');

const desc = localStorage.getItem("formDescription");
const title = localStorage.getItem("formTitle");
const status = localStorage.getItem("formStatus");

appIcon.addEventListener('click', () => {
    appSidebar.classList.toggle('show');
    appContent.classList.toggle('app-sidebar-show');
  });

// Profile button
let profileButton =  document.querySelector(".profile-btn");
profileButton.addEventListener("click", function() {

  window.location.href = "profile.html";
  
});

  // Get the local mode stored if it exists
  let localMode = parseInt(localStorage.getItem("mode")) || 0;

  // Toggle for light and dark themes
  var modeSwitch = document.querySelector(".mode-switch");

  window.onload = function() {

    const studentName = localStorage.getItem("f_name") + " " + localStorage.getItem("l_name")[0] + ".";
    document.getElementById("std_name").innerHTML = studentName;

    localStorage.setItem("mode", localMode.toString());

    if(localMode == 1) {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    }
    console.log(localMode);
  };

  // Toggle for light themes listener
  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
    localMode = localMode == 1 ? 0 : 1;
    localStorage.setItem("mode", localMode.toString());
  });


  // *********************************
  //  Organize the Data for each form
  // *********************************

  const formTitle = document.getElementsByClassName('company-title');
  const formAboutJob = document.getElementsByClassName('about-job');
  const formValues = document.getElementsByClassName('value');
  const formRespn = document.getElementsByClassName('responibilities');
  const formAboutYou = document.getElementsByClassName('about-you');
  const formAboutComp = document.getElementsByClassName('about-company');
  const formQual = document.getElementsByClassName('qualifications');