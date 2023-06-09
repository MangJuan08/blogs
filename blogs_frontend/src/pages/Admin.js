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

  const fetchPosts = () => {
    axios.get(`http://localhost:3001/getPosts`).then((res) => {
      setPost([res]);
    });
  };

  const refetchPost = () => {
    setPost([]);
    fetchPosts();
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
          <h1>POSTS</h1>
          <p>total posts: {posts.length > 0 ? posts[0].data.length : ""}</p>
          <button className="btn btn-outline-success sm" onClick={refetchPost}>
            Refresh
          </button>
          <br></br>
          <br></br>
          {posts.length > 0 ? <PostsSection posts={posts} /> : ""}
          <br></br>
          <br></br>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};
