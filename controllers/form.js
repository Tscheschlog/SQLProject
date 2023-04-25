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
  const formTitle = document.getElementById('company-title');
  const formAboutJob = document.getElementById('about-job');
  const formValues = document.getElementById('value');
  const formRespn = document.getElementById('responibilities');
  const formAboutYou = document.getElementById('about-you');
  const formAboutComp = document.getElementById('about-company');
  const formQual = document.getElementById('qualifications');
  
  // h2 element
  formTitle.innerHTML = desc.substring(desc.indexOf("Company:") + 9, desc.indexOf("About the Job:"));
  
  // p element
  formAboutJob.innerHTML = desc.substring(desc.indexOf("About the Job:") + 15, desc.indexOf("Value:"));
  
  // p element
  formValues.innerHTML = desc.substring(desc.indexOf("Value:") + 7, desc.indexOf("Responsibilities:"));
  
  // p element
  formAboutComp.innerHTML = desc.substring(desc.indexOf("About us:") + 10, desc.indexOf("Qualifications:"));
  
  // Create the list elements for each ul
  function createListElements(section, text) {
  
      if(text == "" || text == "\n" || text == " ")
          return;
    
      else {
        if(text.indexOf(":") != -1)
          createListElements(section, text.substring(text.indexOf("\n") + 1));
        else if(text.indexOf("\n") == -1) {
          let item = document.createElement("li");
          item.appendChild(document.createTextNode(text));
          section.appendChild(item);
        }
        else {
          let item = document.createElement("li");
          item.appendChild(document.createTextNode(text.substring(0, text.indexOf("\n"))));
          section.appendChild(item);
          createListElements(section, text.substring(text.indexOf("\n") + 1));
        }
      }
  }
  
  
  // ul and li elements
  createListElements(formRespn, desc.substring(desc.indexOf("Responsibilities:"), desc.indexOf("About you:")));
  
  //  ul and li elements
  createListElements(formAboutYou, desc.substring(desc.indexOf("About you:"), desc.indexOf("About us:")));
  
  // ul and li elements 
  createListElements(formQual, desc.substring(desc.indexOf("Qualifications:")));
  
const applyButton = document.getElementById("apply-button");
applyButton.addEventListener('click', () => {
  console.log("CLICK")
}); 

  