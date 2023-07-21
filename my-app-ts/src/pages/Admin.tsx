import React, { useEffect, useState } from "react";
import axios from "axios";
import { IPosts } from "../model/posts";
import { Posts } from "./Posts";

export const Admin = () => {
  const [objLength, setLength] = useState<number>(0);
  const [posts, setPosts] = useState<IPosts[]>([]);




  const fetchPosts = () => {
    axios.get(`http://localhost:3001/getPosts`).then((res) => {
      console.log(res.data);
      setLength(Object.keys(res).length);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      Admin
      {objLength > 0 ? <Posts posts={posts}  /> : ""}
    </div>
  );
};
