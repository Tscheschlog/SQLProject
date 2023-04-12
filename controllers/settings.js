  // Get the local mode stored if it exists
  let localMode = parseInt(localStorage.getItem("mode")) || 0;

   // Profile button
   let profileButton =  document.querySelector(".profile-btn");
    profileButton.addEventListener("click", function() {

      window.location.href = "profile.html";
      
    });


  // Toggle for light and dark themes
  var modeSwitch = document.querySelector(".mode-switch");

  window.onload = function() {

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