import React from 'react';
import logo from './MichaelRIvera.JPG';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Michael Rivera and Im going to master React!!
        </p> */}
        <BrowserRouter>
          <Navi />
        </BrowserRouter>
        <a
          className="App-link"
          href="https://github.com/miker179"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out !!!!!
        </a>
      </header>
    </div>
  );
} 


function Navi() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/aboutme" component={AboutMe} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}


export default App;
