import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Admin } from "./pages/Admin";
import { User } from "./pages/User";
import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import { Crud } from "./pages/Crud";
import Category from "./pages/Category";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/singlePost/:idpost" element={<SinglePost/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/crud" element={<Crud/>}/>
        <Route path="/category" element={<Category/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
