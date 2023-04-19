const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxx',
  port: 3306,
  database: 'employee_db'
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});


function createDatabase(databaseName) {
  let sql = `CREATE DATABASE ${databaseName}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
}

function createTable(tableName, ...columns) {
  const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns.join(', ')})`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.error(`Error creating ${tableName} table`, error);
      return;
    }
    console.log(`${tableName} table created successfully`);
  });
}

function dropTable(tableName) {
  let sql = `DROP TABLE ${tableName}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table dropped");
  });
}

function insertData(tableName, data) {
  let sql = `INSERT INTO ${tableName} SET ?`;
  connection.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log("Data inserted");
  });
}

function updateData(tableName, data, condition) {
  let sql = `UPDATE ${tableName} SET ? WHERE ${condition}`;
  connection.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log("Data updated");
  });
}

function deleteData(tableName, condition) {
  let sql = `DELETE FROM ${tableName} WHERE ${condition}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Data deleted");
  });
}

function selectData(tableName, columns, condition) {
  let sql = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
    return sql;
  });
}


async function addStudent(firstName, lastName, email) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'xxxx',
      port: 3306,
      database: 'employee_db'
    });

    const query = 'INSERT INTO student (first_name, last_name, email) VALUES (?, ?, ?)';
    const values = [firstName, lastName, email];

    const [rows, fields] = await connection.execute(query, values);

    console.log(`Added ${rows.affectedRows} student record(s)`);

    connection.end(); // close the database connection
  } catch (error) {
    console.error(error);
  }
}

function getFormData(callback) {
  let sql = `SELECT title, description FROM form`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
}


function getUserFormDataByEmail(email, callback) {
  let sql = `SELECT * FROM internship_survey INNER JOIN form ON internship_survey.form_id = form.form_id WHERE student_id IN (SELECT student_id FROM student WHERE email = '${email}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
}

module.exports = {
  createDatabase,
  createTable,
  dropTable,
  insertData,
  updateData,
  deleteData,
  selectData,
  addStudent,
  getFormData,
  getUserFormDataByEmail
};

connection.end((error) => {
  if (error) {
    console.error('Error closing the MySQL Database connection', error);
    return;
  }
  console.log('Connection closed successfully');
});


