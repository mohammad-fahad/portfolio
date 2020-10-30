import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-none">
                <button className="navbar-toggler navbtn navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 text-light" to="/home"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-light" to="/about"><strong>About</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-light" to="/projects"><strong>Projects</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-light" to="/blogs"><strong>Blogs</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 text-light" to="/contact"><strong>Contact Me</strong></Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mr-5 text-light" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1DYq0qx7OfLsrSfwV8FtZWc5o-G4vnfRc/view?usp=sharing">
                                <button className="btn btn-success">
                                    <strong>Resume</strong>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;