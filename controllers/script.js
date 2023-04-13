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
document.addEventListener("DOMContentLoaded", function () {
  // Create the internship entries
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );
  createInternshipBox(
    "Software Engineering Intern",
    "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence."
  );

const appIcon = document.querySelector('.app-icon');
const appSidebar = document.querySelector('.app-sidebar');
const appContent = document.querySelector('.app-content');


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
});
