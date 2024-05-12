var mysql = require("mysql2");
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { error } = require("console");

app.use(cors());
var connection = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "password",
  database: "mern",
});
connection.connect();
app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.get("/college", (req, res) => {
  connection.query("SELECT * FROM colleges", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
app.post("/college/update", (req, res) => {
  console.log(req.body);
  const id = req.body.Id;
  const fname = req.body.fname;
  const lname = req.body.Lname;
  const email = req.body.Email;
  const pass = req.body.Password;
  const clg = req.body.College_id;
  connection.query(
    `UPDATE users SET id='${id}', fname='${fname}' ,lname='${lname}',email='${email}',password='${pass}',college_id='${clg}' WHERE id=${id}`,
    function (error, results, fields) {
      if (error) throw error;
      const obj = { msg: "data update" };
      res.send(JSON.stringify(obj));
    },
    console.log("Updated Successfully")
  );
});
const port = 3001;
app.listen(port, () => {
  console.log(`listning at port ${port}`);
});
