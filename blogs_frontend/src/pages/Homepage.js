import React, { useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import LoginSection from "../components/LoginSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styleHomepage = {
  marginTop: "50px",
};
const Homepage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <NavbarSection />
      <div style={styleHomepage}>
        <LoginSection
          handleSubmit={handleSubmit}
          login={login}
          setLogin={setLogin}
        />
      </div>
    </div>
  );
};

export default Homepage;
