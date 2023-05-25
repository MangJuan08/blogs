const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
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

  con.connect((err) => {
    con.query(
      "SELECT * FROM users where username='" + loginDetails.username + "'" + "&& password='"+loginDetails.password+"'",
      (error, result, fields) => {
        if (result.length > 0) {
          let results = Object.values(JSON.parse(JSON.stringify(result)));
         let id = results[0].idUser;
          const token = jwt.sign({id}, "secretKey", { expiresIn: "60m" });

          res.json({
            login:true,
            isAdmin: results[0].userType === "admin" ? true : false,
            results,
            token,
            id:id
          });

        } else {
          res.json({message:"login failed"});
        }
      }
    );
  });
});


app.get("/getPosts", (req, res) => {

  con.connect((err) => {
    con.query(
      "SELECT * FROM posts",
      (error, result, fields) => {
       res.send(result)
      }
    );
  });
});


app.get("/getSinglePost/:id", (req, res) => {


console.log(req.params.id)

  con.connect((err) => {
    con.query(
      "SELECT * FROM posts where idpost='" + req.params.id + "'",
      (error, result, fields) => {
       res.send(result)
      }
    );
  });
});


const verifyJWT = (req, res, next) => {
  
  const token = req.headers["access-token"];
  if(!token) {
    return res.json("need token");
  }
  else {
    jwt.verify(token, "secretKey", (err,decoded) => {
      if(err) {
        res.json("not authenticated")
      } else {
        req.id = decoded.id;
        next();
      }
    })
  }
   
}

app.get("/controlAuth", verifyJWT, (req, res) => {
  return res.json("authenticated")
  });

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);

/*


  const verify = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token,"secretKey", (err,user) => {
        if(err) {
          return res.status(403).json("token non valido");
        }

        req.user = user;
        next();
      })
    }
    else
    {
      res.status(401).json("u are not authenticatedd")
    }

  }
  */
