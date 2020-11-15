
import React, { Component } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar' ;
import Home from './components/pages/Home' ;
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer'
import Details from './components/pages/Details' ;
import './App.css';

 class App extends Component {
  render() {
    return (
      <Router>
      
      <div className="App">
        <Navbar/>
         
        <Route path="/" exact={true} component={Home}/>
        <Route path="/details" exact={true} component={Details}/>
        <Route path="/contact" exact={true} component={Contact}/>
     <Footer/>
      </div>
      
      </Router>
    );
  }
}

export default App;