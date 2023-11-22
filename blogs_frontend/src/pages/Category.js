import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");

  const getCategories = () => {
    axios.get(`http://localhost:3001/getCategories`).then((res) => {
      setCategories([res]);
    });
  };

  useEffect(() => {
    getCategories();

  }, [])

  if (token) {
    return (
      <div>
        {" "}
        <NavbarSection />
        <br></br><br></br>
        <div className="container">
          <h1>CATEGORY</h1>
          <br></br><br></br>

          <ul className="list-group">
            {
              categories.length > 0 ?
                /* console.log(categories[0].data[0].category_post)*/
                categories[0].data.map((item, index) => {


                  return <li className="list-group-item" key={index}><Link to={`/singleCategory/${Object.values(item)}`}>{Object.values(item)}</Link></li>
                }

                )
                : ""}
          </ul>

        </div>
      </div >
    );
  } else {
    navigate("/");
  }
};

export default Category;
