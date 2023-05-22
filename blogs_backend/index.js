const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "example_Db",
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
 /* con.connect(function (err) {
    let results = con.query("SELECT * FROM users where username=" + req.body.username);
      console.log(results)
  });*/



 let ra = Object.values(req.body);
 console.log(ra)

 for (const [key, value] of Object.entries(RangeError)) {
  console.log(`${key}: ${value}`);
}
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
