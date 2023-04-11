-- DROP TABLE internship_survey;
-- DROP TABLE form;
-- DROP TABLE company;
-- DROP TABLE  internship;
-- DROP TABLE student;
-- DROP TABLE tag;


CREATE TABLE student (
  student_id INTEGER PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR

);

CREATE TABLE internship(
    internship_id INTEGER PRIMARY KEY,
    title VARCHAR,
    start_date VARCHAR,
    end_date VARCHAR,
    company_id VARCHAR,
    student_id VARCHAR,
    FOREIGN KEY (company_id) REFERENCES company,
    FOREIGN KEY (student_id) REFERENCES student
);

CREATE TABLE company (
    company_id INTEGER PRIMARY KEY,
    name VARCHAR

);

CREATE TABLE tag (
    tag_id INTEGER PRIMARY KEY,
    name VARCHAR

);

CREATE TABLE form (
    form_id INTEGER PRIMARY KEY,
    title VARCHAR,
    description TEXT
);

CREATE TABLE internship_survey(
    survey_id INTEGER PRIMARY KEY,
    date_submitted VARCHAR,
    form_id INTEGER NOT NULL,
    internship_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY (form_id) REFERENCES form,
    FOREIGN KEY (internship_id) REFERENCES internship,
    FOREIGN KEY (student_id) REFERENCES student,
    FOREIGN KEY (tag_id) REFERENCES tag
);