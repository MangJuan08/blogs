const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;

const con = mysql.createConnection({
  connectionLimit: 100,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "example_Db",
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  let bodyReq = [];
  bodyReq = Object.values(req.body);

  let loginDetails = {
    username: bodyReq[0].username,
    password: bodyReq[0].password,
  };

  con.connect(function (err) {
    con.query(
      "SELECT * FROM users where username='" + loginDetails.username + "'",
      function (error, result, fields) {
        if (result.length>0) 
        {
          res.send("trovato")
        }
        else
        {
          res.send("non trovato")
        }
      }
    );
  });
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
