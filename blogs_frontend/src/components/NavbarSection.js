import React from "react";

export const NavbarSection = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="prova">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="prova">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="prova">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="prova">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};


