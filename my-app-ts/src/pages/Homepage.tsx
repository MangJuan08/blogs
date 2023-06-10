import React, { useState } from "react";
import { Login } from "../component/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [username, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);


    const loginBody = {
        username: e.target[0].value,
        password: e.target[1].value,
      };
    axios
      .post("http://localhost:3001/login", {
        body: loginBody,
      })
      .then((res) => {
        if (res.data.login === true && res.data.isAdmin === true) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("idUtente", res.data.id);
          localStorage.setItem("userType", "admin");
          navigate("/admin");
        } else if (res.data.login === true && res.data.isAdmin === false) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("idUtente", res.data.id);
          localStorage.setItem("userType", "user");
          navigate("/user");
        } else {
          console.log(res.data.message);
        }
      });

  };

  return (
    <div>
      {" "}
      <br></br>
      <Login
        username={username}
        password={password}
        handleSubmit={handleSubmit}
        setUser={setUser}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Homepage;
/*
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(36);
  const [numbers, setArrayNumbers] = useState<number[]>([5, 6, 7, 8, 9, 0]);

  const formP: FormPerson = {
    name: name,
    age: age,
    arrayNumber: numbers,
    funzioni: {
      setName: setName,
      setAge: setAge,
      setArrayNumbers: setArrayNumbers,
    },
  };





<FormInput formP={formP} handleSubmit={handleSubmit}/>



*/
