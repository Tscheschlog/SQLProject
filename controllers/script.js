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

const formatDesc = (desc) => {

  let desc1 = "Job Title: Software Engineering Intern (Mason, OH)\n\nCompany Description:\n\nL3Harris is dedicated to recruiting and developing diverse, high-performing talent who are passionate about what they do. Our employees are unified in a shared dedication to our customers' mission and quest for professional growth. L3Harris provides an inclusive, engaging environment designed to empower employees and promote work-life success. Fundamental to our culture is an unwavering focus on values, dedication to our communities, and commitment to excellence in everything we do.\n\nL3Harris Technologies is an agile global aerospace and defense technology innovator, delivering end-to-end solutions that meet customers' mission-critical needs. The company provides advanced defense and commercial technologies across air, land, sea, space and cyber domains. L3Harris has approximately $17 billion in annual revenue, 50,000 employees and customers in more than 130 countries. L3Harris.com\n\nJob Description:\n\nApply computer science, engineering, and mathematical analysis concepts and principles in the development of software for the target application\nWork closely with cross functional members of the engineering organization to develop and evaluate interfaces between hardware and software, and operational performance requirements and design of the overall system\nSupport and participate in all phases of the software development life cycle, including requirements analysis, design, implementation, integration, and test of embedded software for real-time control of advanced tactical radio equipment\nDevelop software test procedures, software programs, and related documentation\nUtilize modeling tools and equipment to establish operating data, conduct experimental tests, and evaluate results\nParticipate in peer reviews, identify, track and repair defects\nUtilize a variety of software languages (i.e., C++, C#, C, Java, Ruby, HTML5, XML, SQL, Perl, Python, Ajax, Qt) on Windows, Linux, mobile platforms, and embedded real time operating systems (VxWorks, Linux, QNX, Integrity, Windows CE, and others for Motorola, Intel, TI, and custom processor designs)\n\nQualifications:\n\nPursuing a Bachelor's degree in Computer Science, Computer Engineering, Software Engineering, Electrical Engineering, Wireless Engineering, Information Security, Mathematics, Digital Arts & Sciences or related field\nGPA of 3.0 or greater\n\nPreferred Skills:\n\nOne or more of the following: C++, C#, C, Java, Ruby, JEE, HTML5, XML, SQL, Qt, Windows, .NET, Unix, Linux, SOA, RTOS, Real-Time Controls, Wireless, Software Security, Robotics, OOA/OOD, Hadoop, Android, Embedded Systems\n\nSecurity Clearance:\n\nSecurity clearances may only be granted to U.S. citizens. In addition, applicants who accept a conditional offer of employment may be subject to government security investigation(s) and must meet eligibility requirements for access to classified information.";


  return desc1;

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
      console.log(item);


      let formattedDesc = formatDesc(item.description)
      createInternshipBox(item.title, formattedDesc);

    });

  // if(sqlData.length == 1) {
  //   localStorage.setItem("formTi", sqlData[0]['first_name']);
  //   localStorage.setItem("l_name", sqlData[0]['last_name']);
  //   window.location.href = 'index.html';
  // }
  // else
  //   alert('Please enter a valid email.');

});


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
