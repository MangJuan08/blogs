import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavbarSection } from "../components/NavbarSection";
import PostsSection from "../components/PostsSection";


export const Admin = () => {
  const [posts, setPost] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const checkAuthentication = () => {
    axios
      .get("http://localhost:3001/controlAuth", {
        headers: { "access-token": localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data === "not authenticated") {
          localStorage.removeItem("token");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const logoutAdmin = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const fetchPosts = () => {
    let id = localStorage.getItem("idUtente");
    axios.get(`http://localhost:3001/getPosts/${id}`).then((res) => {
      setPost([res]);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (token) {
    return (
      <div>
        <NavbarSection />
        <div className="container">
          <br></br>
          <br></br> <br></br>
          <br></br>
          <h1>ADMIN</h1>
          <h4>POSTS BY ADMIN</h4>
          {posts.length > 0 ? <PostsSection posts={posts} /> : ""}
          <br></br><br></br>
    
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};
