import React from "react";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavbarSection = () => {
    const navigate = useNavigate();
    const logoutAdmin = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        localStorage.removeItem("idUtente");
        navigate("/");
    }

    const token = localStorage.getItem("token");
    if(token)
    {
        return (
            <div>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="prova">DAJUAN</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/admin" className="nav-link active" aria-current="page" href="prova">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link active" aria-current="page" href="prova">Profile</Link>
                </li>
                <li className="nav-item">
                 <button onClick={logoutAdmin} className="btn btn-primary sm">LOGOUT</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            </div>
          );  
    }

    else {
        return (
            <div>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="prova">DAJUAN</a>
   
          </div>
        </nav>
            </div>
          );  

    }

};


