import React from 'react';
import NavBar from './Navbar';
import Pokemon from '../pokemonWB.png';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
    render() {
        return (
            <div className="project-wrap">
                <div className="container-fluid projects">
                    <NavBar />
                    <div class="row background align-items-center">
                        <div className="col-12">
                            <h1>COMPUTER GRAPHIC AND IMAGING / WEB DEVELOPER</h1>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-12">
                            <h1>Projects</h1>
                        </div>
                        <div class="col-4">
                            <img src={Pokemon} className="thumbnail" alt="pokemon" />
                            <h3><Link to="/pokemon">Pokemon Website</Link></h3>
                            <p>Made with HTML and CSS and JS</p>
                        </div>
                        <div class="col-4 offset-1">
                            <img src={Pokemon} className="thumbnail" alt="pokemon" />
                            <h3>P</h3>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default Projects;