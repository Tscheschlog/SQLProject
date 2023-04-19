const database = require('./getSql.js');

database.dropTable(student);
database.dropTable(internship);
database.dropTable(company);
database.dropTable(tag);
database.dropTable(form);
database.dropTable(internship_survey);

// Creating the student table
database.createTable(
  'student',
  'student_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'first_name VARCHAR (20) NOT NULL',
  'last_name VARCHAR (20) NOT NULL',
  'email VARCHAR (50) NOT NULL',
  'UNIQUE (email)',
  'UNIQUE (student_id)'
);

// Creating the company table
database.createTable(
  'company',
  'company_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'name VARCHAR',
  'UNIQUE (company_id)'
);

// Creating the tag table
database.createTable(
  'tag',
  'tag_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'name VARCHAR (30)',
  'UNIQUE (tag_id)'
);

// Creating the form table
database.createTable(
  'form',
  'form_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'title VARCHAR (50)',
  'description TEXT',
  'UNIQUE (form_id)'
);

// Creating the internship table
database.createTable(
  'internship',
  'internship_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'title VARCHAR (50) NOT NULL',
  'start_date DATE',
  'end_date DATE',
  'status INTEGER (1)',
  'company_id INTEGER NOT NULL',
  'student_id INTEGER',
  'FOREIGN KEY (company_id) REFERENCES company',
  'FOREIGN KEY (student_id) REFERENCES student',
  'UNIQUE (internship_id)'
);

// Creating the internship_survey table
database.createTable(
  'internship_survey',
  'survey_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT',
  'date_submitted DATE',
  'text_data TEXT',
  'form_id INTEGER NOT NULL',
  'internship_id INTEGER NOT NULL',
  'student_id INTEGER NOT NULL',
  'tag_id INTEGER NOT NULL',
  'FOREIGN KEY (form_id) REFERENCES form',
  'FOREIGN KEY (internship_id) REFERENCES internship',
  'FOREIGN KEY (student_id) REFERENCES student',
  'FOREIGN KEY (tag_id) REFERENCES tag',
  'UNIQUE (survey_id)'
);

