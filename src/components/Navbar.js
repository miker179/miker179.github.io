import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        //   <div >
        //     <Link to="/">Home </Link>
        //     <Link to="/projects">Projects </Link>
        //     <Link to="/aboutme">About Me</Link>
        //   </div>
        <div class="bg-dark row navi">
            <div class="col-2">
                <a class="navbar-brand" href="#">MR</a>
            </div>
            <div class="col-4 offset-6">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects">Projects </Link>
                </li>
                <li className="nav-item">
                    <Link to="/aboutme">About Me</Link>
                </li>
            </ul>
            </div>
            
        </div>
        

    );
};

export default Navbar;