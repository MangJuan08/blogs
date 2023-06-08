import React, { useEffect, useState } from "react";
import { NavbarSection } from "../components/NavbarSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as moment from "moment";
import CommentSection from "../components/CommentSection";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  let id = useParams();
  let val = Object.values(id);
  const idUtente = localStorage.getItem("idUtente");
  const [commentList, setList] = useState([]);
  const [commentBox, setStateForm] = useState({
    comment: "",
  });
  const fetchSinglePost = () => {
    axios.get(`http://localhost:3001/getSinglePost/${val[0]}`).then((res) => {
      setPost([res]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentBox.comment);
    console.log(idUtente);

    axios
      .post("http://localhost:3001/insertComment", {
        comment: commentBox.comment,
        id: idUtente,
        idPost: val[0],
      })
      .then((res) => {
        setList([]);
        fetchComments();
      });
  };

  const fetchComments = () => {
    axios
      .get(`http://localhost:3001/getComments/${val[0]}`)
      .then((res) => setList([res]));
  };

  const onValChange = (event) => {
    const { name, value } = event.target;
    setStateForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchSinglePost();
    fetchComments();
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
                  name="comment"
                  rows="3"
                  style={{ width: "80ch" }}
                  onChange={onValChange}
                ></textarea>
              </div>
              <button className="btn btn-outline-primary">
                submit your comment
              </button>
            </form>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            {commentList.length > 0 ? (
              <CommentSection commentList={commentList} />
            ) : (
              <p>no comments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
