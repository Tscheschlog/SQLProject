function connectDatabase(){
  const mysql = require('mysql');
  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234567890',
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});
connection.end((error) => {
});
}


function createDatabase(databaseName) {
  let sql = `CREATE DATABASE ${databaseName}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Database created");
  });
}

function createTable(tableName, columns) {
  let sql = `CREATE TABLE ${tableName} (${columns})`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created");
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
  });
}