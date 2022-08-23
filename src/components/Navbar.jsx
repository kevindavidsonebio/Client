/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from "../assets/logo.png";
import '../assets/styles/icons.css';
import Avatar from '../assets/images/avatar.png'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "#333333"}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src={Logo} alt="Sprout Solution Logo" width="100px" height="50px" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" style={{marginLeft: "150px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Request
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Team
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Administration Tools
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Maintenance
                        </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <input type="text" className="border-bottom" style={{color: "#f1f1f1", border: "0", outline: "0", background: "transparent", paddingLeft: "20px", marginLeft: "20px", width: "160px"}} placeholder= "employee search"></input>
                        <span class="fa-solid fa-magnifying-glass fa-xl text-white-50" style={{marginLeft: "20px"}}></span>
                        <span class="fa-solid fa-bell fa-xl text-white-50" style={{marginLeft: "20px"}}></span>
                    </div>
                </div>

                <ul className="navbar-nav d-flex flex-row">
                    <img src={Avatar} alt='Profile Picture'className='rounded-circle align-center' style={{width: "40px"}}/>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Account Settings</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;