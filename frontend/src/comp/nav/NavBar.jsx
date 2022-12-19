import React from "react";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Wish</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <a className="nav-link" href="/massages">massages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/auth">log in</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/book">Book Here</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar