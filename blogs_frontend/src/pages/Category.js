import React from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <div>
        {" "}
        <NavbarSection />
        <br></br><br></br>
        <div className="container">
          <h1>CATEGORY</h1>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Category;
