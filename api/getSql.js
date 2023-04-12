const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RealmOfTheMadGod1!',
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


connection.end((error) => {
  if (error) {
    console.error('Error closing the MySQL Database connection', error);
    return;
  }
  console.log('Connection closed successfully');
});



function createDatabase(databaseName) {
  let sql = `CREATE DATABASE ${databaseName}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
}

function createTable(tableName, ...columns) {
  let sql = `CREATE TABLE ${tableName} (${columns})`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Creating table ${tableName} with columns: ${columns.join(', ')}");
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