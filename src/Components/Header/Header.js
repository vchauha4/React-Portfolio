import { faFileAlt, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header class="sticky-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand w-50" href="#">
                <img class="w-75" src="icons/logo.png" alt=""/>
              </a>
              <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-white"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item ms-3">
                    <NavLink to='/' exact={true} className="nav-link text-white" activeClassName="active"><span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span> Home</NavLink>
                  </li>
                  <li class="nav-item ms-3">
                  <NavLink to='/about' className="nav-link text-white" activeClassName="active"><span><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span> About Me</NavLink>
                  </li>
                  <li class="nav-item ms-3">
                  <NavLink to='/resume' className="nav-link text-white" activeClassName="active"><span><FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon></span> Resume</NavLink>
                  </li>
                  <li class="nav-item ms-3">
                  <NavLink to='/projects' className="nav-link text-white" activeClassName="active"><span><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></span> Projects</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;