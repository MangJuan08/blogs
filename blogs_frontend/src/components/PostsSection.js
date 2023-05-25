import React, { useState, useEffect } from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";

const styleCards = {
  marginBottom: "20px",
};
const PostsSection = ({ posts }) => {
  return (
    <div>
      {posts[0].data.map((item, i) => {
        return (
          <div className="card" style={styleCards} key={i}>
            <div className="card-header"><h6>{item.post_titolo}</h6></div>
            <div className="card-body">
              <p className="card-title">Special title treatment</p>
              <p className="card-text">{item.post_corpo}</p>
              <Link to={`http://localhost:3000/singlePost/${item.idpost}`}>click</Link>
            </div>
            <div className="card-footer text-body-secondary">
              <p>{moment(item.post_date).format("MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsSection;

/* {
    posts.data.map((item,i) => {
        return (
            <li key={i}>{item.post_titolo}</li>
        )
    })


 }*/
