import React from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        //   <div >
        //     <Link to="/">Home </Link>
        //     <Link to="/projects">Projects </Link>
        //     <Link to="/aboutme">About Me</Link>
        //   </div>
        <div className="bg-dark row navi">
            <div class="col-2">
                <a class="navbar-brand" href="#">MR</a>
            </div>
            <div class="col-4 offset-6">
                <ul className="nav justify-content-center dropdown">

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
                <div className="burger">
                    <div clasName="line1"></div>
                    <div clasName="line2"></div>
                    <div clasName="line3"></div>
                </div>
            </div>
        </div>


    );
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.dropdown');
    const navLinks = document.querySelectorAll('.navi li');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('navi-active');
    });
    
    //Animate links
    navLinks.forEach((link, index) =>{
        link.style.animation = 'navLinkFade 0.5s ease forwards ${ index / 7}';
    });

}

window.onload = function () {
    navSlide();
};

export default Navbar;