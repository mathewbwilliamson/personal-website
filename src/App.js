import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/index.css';
import NavBar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MajorProjects from './components/MajorProjects';
import MinorProjects from './components/MinorProjects';
import WorkWithMe from './components/WorkWithMe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <MajorProjects />
        <MinorProjects />
        <WorkWithMe />
      </div>
    );
  }
}

export default App;
