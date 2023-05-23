import React from 'react'
import axios from "axios";

export const Admin = () => {

    const checkAuthentication = () => {
        axios.get("http://localhost:3001/controlAuth", { headers: { 'access-token': localStorage.getItem("token")}}).then(res => console.log(res)).catch((err) => console.log(err))
    }
  return (
    <div>
        <p>Admin</p>

    <button onClick={checkAuthentication}>control</button>
    </div>
  )
}
