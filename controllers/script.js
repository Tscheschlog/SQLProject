function getFormattedDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month}, ${day}`;
}

// Add the following listeners to the document when loaded:
document.addEventListener("DOMContentLoaded", async function () {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tableName: 'form', columns: '*', condition: 'form_id > 0'})
  };

const sqlData = await fetch('http://localhost:3000', requestOptions)
    .then(response => response.json())
    .then(data => {return data;})
    .catch(error => console.log(error));



    sqlData.forEach((item) => {
      
      console.log(item.description);
      createInternshipBox(item.title, item.description);

    });

});


const appIcon = document.querySelector('.app-icon');
const appSidebar = document.querySelector('.app-sidebar');
const appContent = document.querySelector('.app-content');
const appNameImg = document.querySelector('.app-name');


appIcon.addEventListener('click', () => {
  appSidebar.classList.toggle('show');
  appContent.classList.toggle('app-sidebar-show');
});

// Set today's date
const today = new Date();
const formattedDate = getFormattedDate(today);
document.querySelector(".time").innerHTML = formattedDate;

// Profile button
let profileButton =  document.querySelector(".profile-btn");
profileButton.addEventListener("click", function() {

  window.location.href = "profile.html";
  
});

  
  // Get the local mode stored if it exists
  let localMode = parseInt(localStorage.getItem("mode")) || 0;

  // Toggle for light and dark themes
  var modeSwitch = document.querySelector(".mode-switch");


  function toggleImage() {
    const img = document.querySelector('.app-name');
    const imgSrc = img.getAttribute('src');
    
    if (localMode == 0) {
      img.setAttribute('src', '../components/assets/light.png');
    } else {
      img.setAttribute('src', '../components/assets/dark.png');
    }
  }

  window.onload = function() {

    toggleImage();

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

    toggleImage();
  });

  var listView = document.querySelector(".list-view");
  var gridView = document.querySelector(".grid-view");
  var projectsList = document.querySelector(".project-boxes");

  // If list view button is clicked
  listView.addEventListener("click", function () {
    // Deactivate grid view
    gridView.classList.remove("active");
    projectsList.classList.remove("jsGridView");

    // Activate list view
    listView.classList.add("active");
    projectsList.classList.add("jsListView");
  });

  // If grid view button is clicked
  gridView.addEventListener("click", function () {
    // Deactivate list view
    listView.classList.remove("active");
    projectsList.classList.remove("jsListView");

    // Activate grid view
    gridView.classList.add("active");
    projectsList.classList.add("jsGridView");
  });

  document
    .querySelector(".messages-btn")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.add("show");
    });

  document
    .querySelector(".messages-close")
    .addEventListener("click", function () {
      document.querySelector(".messages-section").classList.remove("show");
    });
