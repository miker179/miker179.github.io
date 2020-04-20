import React from 'react';
import logo from '../MichaelRIvera.JPG';
import Navbar from './Navbar';
class Home extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    My name is Michael Rivera and Im going to master React!!
                </p>
                <Navbar />
            </div>
        )
    }

}

export default Home;
