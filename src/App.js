
import React, { useState, useLayoutEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NavBar from './components/Navbar/NavBar.jsx';

import Project from './components/Project/Project.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx';






export default function App() {

  return (
    <div className='appContainer'>


      <Router>

        <header>
          <NavBar pageNames={["Home", "About", "Contacts"]} />

        </header>
        <div className="mainContainer">

          <Switch>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/project" component={(props) => <Project {...props} someProp="helloProp" />} >
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>


        <Footer pageNames={["Home", "About", "Contacts"]} />
      </Router>

    </div>
  )
}


