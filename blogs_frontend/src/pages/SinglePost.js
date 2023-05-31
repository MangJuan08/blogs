import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as moment from "moment";

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
        <br></br><br></br>
        <figure>
        <figcaption class="blockquote-footer">
                  Posted when:{" "}
                  { post.length > 0 ? moment(post[0].data[0].post_date).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  ) : " "} && Posted by: <cite>{ post.length > 0 ? post[0].data[0].username : ""}</cite>

                  {
                    post.length > 0 ? " Category type: "+  post[0].data[0].category_post : ""
                  }
                </figcaption>
              </figure>
    
      </div>
    </div>
  );
};

export default SinglePost;
