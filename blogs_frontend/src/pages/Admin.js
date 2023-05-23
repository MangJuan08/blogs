import React from 'react'
import axios from "axios";
import { useNavigate  } from "react-router-dom";

export const Admin = () => {
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

    if(token) {
        return (
            <div>
                <p>Admin</p>
        
            <button onClick={checkAuthentication}>control</button>
            </div>
          )
    }
    else
    {
        navigate("/");
    }
 
}
