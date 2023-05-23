import React, { useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import LoginSection from "../components/LoginSection";
import axios from "axios";

const styleHomepage = {
  marginTop: "50px",
};

const Homepage = () => {
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
          console.log("success admin");
        } else if (res.data.login === true && res.data.isAdmin === false ) {
          console.log("success user");
        } else {
            console.log(res.data.message)
        }
      });
  };

  return (
    <div>
      <NavbarSection />
      <div className="container" style={styleHomepage}>
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