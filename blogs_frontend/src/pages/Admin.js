import React, {useEffect} from 'react'
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { NavbarSection } from '../components/NavbarSection';

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

    const logoutAdmin = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const fetchPosts = () => {
       let id = localStorage.getItem("idUtente");
       axios.get(`http://localhost:3001/getPosts/${id}`).then((res) => console.log(res))
    }
    
    useEffect(() => {
        fetchPosts();
    }, [])
    

    if(token) {
        return (
            <div>
               <NavbarSection/>
            <div className='container'>
            <br></br><br></br>      <br></br><br></br>
                <h1>ADMIN</h1>
                <h4>POSTS BY ADMIN</h4>
        
    
            </div>
            </div>
          )
    }
    else
    {
        navigate("/");
    }
 
}
