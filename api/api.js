const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const {addStudent} = require('./getSql')
const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RealmOfTheMadGod1!',
  port: 3306,
  database: 'intern_db'
});

// Route for handling the POST request
app.post('/', (req, res) => {

  const { tableName, columns, condition } = req.body;

  // Call the selectData function with the provided parameters
  const sql = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.json(result); // Return the result as JSON
  });
});

app.post('/insertstudent', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  await addStudent(firstName, lastName, email)
    .then(() => {
      res.status(201).send('Student added successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error adding student');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
