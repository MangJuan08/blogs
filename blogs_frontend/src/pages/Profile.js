import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [dati, setDati] = useState([]);
  const [disableForm , setDisable] = useState(true);
  const [formData, setStateForm] = useState({
    username: "",
    password: "",
    nome: "",
    cognome: "",
  });

  const idUtente = localStorage.getItem("idUtente");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const getDatiUtente = async () => {
    axios
      .get(`http://localhost:3001/datiUtente/${idUtente}`)
      .then((res) => {
        setDati([res]);
        console.log(res.data[0].username);
        setStateForm({
          username: res.data[0].username,
          password: res.data[0].password,
          nome: res.data[0].nome,
          cognome: res.data[0].cognome,
        });
      })
      .catch((err) => console.log(err));
  };

  const onValChange = (event) => {
    const { name, value } = event.target;
    setStateForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const updateProfile = (e) => {
    e.preventDefault();

    const formBody = {
      idUtente: idUtente,
      username: e.target[0].value,
      password: e.target[1].value,
      nome: e.target[2].value,
      cognome: e.target[3].value,
    };

    axios
      .post("http://localhost:3001/updateProfile", {
        body: formBody,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const enableForm  = () => {
    setDisable(false);
  }
  useEffect(() => {
    getDatiUtente();
  }, []);

  if (token && dati.length > 0) {
    return (
      <div>
        <NavbarSection />
        <br></br>
        <div className="container">
          <h1>{"user profile".toUpperCase()}</h1>
          <br></br>
          <br></br>

          <br></br>
    
        <button onClick={enableForm}>Enable Form</button>
        <br></br>
        <br></br>
          <form onSubmit={updateProfile}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={onValChange}
                value={dati.length > 0 ? formData.username : ""}
                disabled={disableForm}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={onValChange}
                value={dati.length > 0 ? formData.password : ""}
                disabled={disableForm}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="nome"
                placeholder="name@example.com"
                onChange={onValChange}
                value={dati.length > 0 ? formData.nome : ""}
                disabled={disableForm}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="cognome"
                onChange={onValChange}
                value={dati.length > 0 ? formData.cognome : ""}
                disabled={disableForm}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <br></br>
            <br></br>
            <button type="submit" className="btn btn-outline-primary">submit</button>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Profile;
