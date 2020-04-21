import React, { Component } from 'react';
import NavBar from './Navbar';
import Mobile from '../mobile.png';
import Desktop from '../desktop.png';
import DesktopWire from '../pokemon-wireframe.png';
import MobileWire from '../pokemon-mobileWireframe.png';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="pokemon-wrap">
                <div className="container-fluid projects">
                    <NavBar />
                    <div class="row background align-items-center">
                        <div className="col-12">
                            <h1>COMPUTER GRAPHIC AND IMAGING / WEB DEVELOPER</h1>
                        </div>
                    </div>
                    <div class="row justify-content-md-center section">
                        <div class="col-12">
                            <h1>Pokemon Website</h1>
                        </div>
                        <div class="col-6">
                            <h4>
                                This website help me grow as a web developer and improve with jquery. It help me make a mobile 
                                website from a Desktop website. I also work with a little of javascript and start doing animation in
                                css. I learn how to use the keyframes and work with svgs file, in order to animate them.
                            </h4>
                        </div>
                    </div>
                    <div class="row justify-content-md-center wire-section section">
                        <div className="col-12">
                            <h1>Wireframes</h1>
                        </div>
                        <div className="col-5 move desk">
                            <img src={DesktopWire} alt="Poke-wire" />
                            <img src={Desktop} alt="desktop" />
                        </div>
                        <div className="col-5 mobi move">
                            <img src={MobileWire} alt="Poke-Mobiwire" />
                            <img src={Mobile} alt="mobile" />
                        </div>
                        <div className="row buttons-contain">
                            <div className="col-12">
                                <button type="button" className="web-button"><a href="https://miker179.github.io/PokemonWebsite/index.html" target="_blank">View Website</a></button>
                            </div>
                            <div className="col-12">
                                <button type="button" className="code-button"><a href="https://github.com/miker179/PokemonWebsite" target="_blank">View Code</a></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Pokemon;