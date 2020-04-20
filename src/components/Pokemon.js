import React, { Component } from 'react';
import NavBar from './Navbar';

class Pokemon extends React.Component{
    render(){
        return(
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
                            <h1>Pokemon Website</h1>
                        </div>
                        <div class="col-6">
                            <h4>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                 dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </h4>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div>
                            <h1>Wireframes</h1>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Pokemon;