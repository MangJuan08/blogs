import React from "react";
import { useNavigate  } from "react-router-dom";

export const NavbarSection = () => {
    const navigate = useNavigate();
    const logoutAdmin = () => {
        localStorage.removeItem("token");
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
                  <a className="nav-link active" aria-current="page" href="prova">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="prova">Features</a>
                </li>
                <li className="nav-item">
                 <button onClick={logoutAdmin} className="btn btn-outline-success sm">LOGOUT</button>
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


