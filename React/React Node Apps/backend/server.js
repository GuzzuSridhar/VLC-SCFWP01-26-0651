const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();

// create a database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "react_data",
});

// connect to db
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to MySql Database");
  }
});

// middleware setup
app.use(cors());
app.use(express.json());

//start Server
app.listen(3000, () => {
  console.log("server started on port 3000");
});

// save employee record
app.post("/employees", (req, res) => {
  const { empId, name, department, salary } = req.body;
  const sql =
    "INSERT INTO employees (empId, name, department, salary) VALUES (?,?,?,?)";

  connection.query(sql, [empId, name, department, salary], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }
    console.log(result);

    return res.status(201).json({
      success: true,
      message: "Employee Added Successfully",
    });
  });
});

// get all employees
app.get("/employees", (req, res) => {
  connection.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }
    res.json(result);
  });
});
