const mysql = require('mysql2');
function selectData(tableName, columns, condition) {
  let sql = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Littleteny1!',
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

selectData('student', '*', 'student_id = 1');