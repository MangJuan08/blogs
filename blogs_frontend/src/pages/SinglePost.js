import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  let id = useParams();
  let val = Object.values(id);

  const fetchSinglePost = () => {
    axios.get(`http://localhost:3001/getSinglePost/${val[0]}`).then((res) => {
      setPost([res]);
    });
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div>
      <NavbarSection />
      <div className="container">
        <br></br><br></br>
        {post.length > 0 ? <h1>{post[0].data[0].post_titolo}</h1> : ""}
        <br></br><br></br>
        {post.length > 0 ? <p>{post[0].data[0].post_corpo}</p> : ""}
      </div>
    </div>
  );
};

export default SinglePost;
