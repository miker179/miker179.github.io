import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
                <h1>AboutMe</h1>
            </div>
        )
    }

}
export default AboutMe;


