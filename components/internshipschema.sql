-- DROP TABLE internship_survey;
-- DROP TABLE form;
-- DROP TABLE company;
-- DROP TABLE  internship;
-- DROP TABLE student;
-- DROP TABLE tag;

-- DROP TABLE internship_survey;
-- DROP TABLE form;
-- DROP TABLE company;
-- DROP TABLE  internship;
-- DROP TABLE student;
-- DROP TABLE tag;


CREATE TABLE student (
  student_id INTEGER PRIMARY KEY,
  first_name VARCHAR (20) NOT NULL,
  last_name VARCHAR (20) NOT NULL,
  email VARCHAR (50) NOT NULL,
  UNIQUE (email),
  UNIQUE (student_id)
);

CREATE TABLE internship(
    internship_id INTEGER PRIMARY KEY,
    title VARCHAR (50), NOT NULL,
    start_date VARCHAR,
    end_date VARCHAR,
    status INTEGER (1),
    company_id INTEGER NOT NULL,
    student_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES company,
    FOREIGN KEY (student_id) REFERENCES student,
    UNIQUE (internship_id)
);

CREATE TABLE company (
    company_id INTEGER PRIMARY KEY,
    name VARCHAR,
    UNIQUE (company_id)

);

CREATE TABLE tag (
    tag_id INTEGER PRIMARY KEY,
    name VARCHAR (30),
    UNIQUE (tag_id)

);

CREATE TABLE form (
    form_id INTEGER PRIMARY KEY,
    title VARCHAR (50),
    description TEXT,
    UNIQUE (form_id)
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
    FOREIGN KEY (tag_id) REFERENCES tag,
    UNIQUE (survey_id)
);
