import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as moment from "moment";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  let id = useParams();
  let val = Object.values(id);
  const idUtente = localStorage.getItem("idUtente");

  const fetchSinglePost = () => {
    axios.get(`http://localhost:3001/getSinglePost/${val[0]}`).then((res) => {
      setPost([res]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  useEffect(() => {
    fetchSinglePost();
    console.log(idUtente)
  }, []);

  return (
    <div>
      <NavbarSection />
      <div className="container">
        <br></br>
        <br></br>
        {post.length > 0 ? <h1>{post[0].data[0].post_titolo}</h1> : ""}
        <br></br>
        <br></br>
        {post.length > 0 ? <p>{post[0].data[0].post_corpo}</p> : ""}
        <br></br>
        <br></br>
        <figure>
          <figcaption className="blockquote-footer">
            Posted when:{" "}
            {post.length > 0
              ? moment(post[0].data[0].post_date).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : " "}{" "}
            && Posted by:{" "}
            <cite>{post.length > 0 ? post[0].data[0].username : ""}</cite>
            {post.length > 0
              ? " Category type: " + post[0].data[0].category_post
              : ""}
          </figcaption>
        </figure>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <textarea
                  placeholder="What's your opinion about the article?"
                  className="form-control"
                  name="commentBox"
                  rows="3"
                  style={{ width: "80ch" }}
                ></textarea>
              </div>
              <button className="btn btn-outline-primary">
                submit your comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
