import React from 'react';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Pokemon from './components/Pokemon';
import Error from './components/Error';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/mobile.css';

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
        <Route path= "/pokemon" component={Pokemon}/>
        <Route component={Error} />
      </Switch>
    </main>
  )
}


export default App;
