import React, { useState, useEffect } from "react";

const PostsSection = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <ul>
        {posts[0].data.map((item, i) => {
          return <li key={i}>{item.post_titolo}</li>;
        })}
      </ul>
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
