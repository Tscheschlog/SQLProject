# Student Internship Application

This is a web-based application that allows students to submit information about their internships through a data entry survey form, which will be stored in a relational database. The system also provides administrative forms for maintaining pick-list items and managing student submissions.

## Features

The application has the following features:

    Student survey form: A data entry form that allows students to fill out information about their internships, including free text items such as descriptions of duties and pick-list items such as company names.
    Administrative forms: Forms for maintaining pick-list items and managing student submissions, including the ability to view, edit, and delete submissions.
    Search form: A form that allows users to search for internships that meet certain criteria. Search results are displayed as a list of submissions.
    Tagging system: Each internship submission includes tags that describe the duties, company, technologies, and other relevant information. Students can select pre-defined tags or enter new ones when filling out the survey form. Tags can be used to search and filter internships for specific criteria.
    Masked identity: Individual submissions can be displayed for any of the search results, but student identity information is masked or hidden.

## Technologies used

The application is built using the following technologies:

    Frontend: HTML, CSS, JavaScript
    Backend: Python, Flask
    Database: SQLite

## How to run the application

To run the application, follow these steps:

    Clone this repository to your local machine.
    Navigate to the project directory in your terminal.
    Install the required dependencies using the command pip install -r requirements.txt.
    Create a new database by running the command python create_db.py.
    Start the Flask server by running the command python app.py.
    Open a web browser and navigate to http://localhost:5000 to access the application.

## How to use the application

To use the application, follow these steps:

    Fill out the student survey form to submit information about your internship.
    Use the search form to find internships that meet certain criteria.
    Use the administrative forms to maintain pick-list items and manage student submissions.

## Acknowledgments

This application was developed as part of a project for Data Engineering (COP 3710) by Luke Hepokoski, Andrew Holm, Jose Suarez, and Christopher Tscheschlog.
