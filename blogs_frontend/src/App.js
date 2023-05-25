import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Admin } from "./pages/Admin";
import { User } from "./pages/User";
import SinglePost from "./pages/SinglePost";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/singlePost/:idpost" element={<SinglePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
