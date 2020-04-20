import React from 'react';
import logo from '../MichaelRIvera.JPG';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div className="home-wrap ">

                <div className="container-fluid home">
                    <div className="row justify-content-md-center profile">
                        <div className="col-2">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                Computer Graphic and Imaging / Web Developer
                        </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center navbar" >
                        <Link className="col-1" to="/">Home </Link>
                        <Link className="col-1 offset-1" to="/projects">Projects </Link>
                        <Link className="col-1 offset-1 about" to="/aboutme">About Me</Link>
                    </div>
                    <a 
                        className="App-link"
                        href="https://github.com/miker179"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub!
                    </a>
                </div>
            </div>

        )
    }

}

export default Home;
