// Add the following listeners to the document when loaded:
document.addEventListener('DOMContentLoaded', function () {
    // Create the internship entries
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");
    createInternshipBox("Software Engineering Intern", "This is the description of the company and some more stuff please just make sure that this whole thing is not displayed since it is a run on sentence.");

    // Toggle for light and dark themes
    var modeSwitch = document.querySelector('.mode-switch');
  
    // Toggle for light themes listener
    modeSwitch.addEventListener('click', function () {                     
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    // If list view button is clicked
    listView.addEventListener('click', function () {

      // Deactivate grid view
      gridView.classList.remove('active');
      projectsList.classList.remove('jsGridView');

      // Activate list view
      listView.classList.add('active');
      projectsList.classList.add('jsListView');
    });
    
    // If grid view button is clicked
    gridView.addEventListener('click', function () {

      // Deactivate list view
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');

      // Activate grid view
      gridView.classList.add('active');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });
