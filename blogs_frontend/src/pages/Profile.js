import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import axios from "axios";

const Profile = () => {

  const [dati, setDati] = useState([]);



  const getDatiUtente = () => {
    const idUtente = localStorage.getItem("idUtente");

    axios
      .get(`http://localhost:3001/datiUtente/${idUtente}`)
      .then((res) => {

        console.log(res);
        setDati(res)
        console.log(res.data[0].username)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDatiUtente();
  }, []);



  return (
    <div>
      <NavbarSection />
      <br></br>
      <div className="container">Profile</div>
    </div>
  );
};

export default Profile;
