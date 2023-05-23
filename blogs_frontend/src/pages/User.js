import React from 'react'
import axios from "axios";
import { useNavigate  } from "react-router-dom";

export const User = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const checkAuthentication = () => {
        axios.get("http://localhost:3001/controlAuth", 
        { 
            headers: { 'access-token': localStorage.getItem("token")}})
    .then(res => {
        if(res.data==="not authenticated")
     {
        localStorage.removeItem("token");
        navigate("/");
     }
    })
    .catch((err) => console.log(err))
    }

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    if(token) {
        return (
            <div>
                <p>User</p>
        
            <button onClick={checkAuthentication}>control</button>
            <button onClick={logoutUser}>logout</button>
            </div>
          )
    }
    else
    {
        navigate("/");
    }
 
}
