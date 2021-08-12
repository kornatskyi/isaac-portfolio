
import React, { useState, useLayoutEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import NavBar from './components/Navbar/NavBar.jsx';

import Project from './components/Project/Project.jsx';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer.jsx';




export default function App() {
  const [color, setColor] = useState("white")

  return (
    <div>


      <Router>
        <div>

          <NavBar pageNames={["Home", "About", "Contacts"]} />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/project" >
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>


        {/* <Footer links={getLinksWithParams([{
          onClick: () => setColor("white"), to: "/home"
        }, {
          onClick: () => setColor("black"), to: "/about"
        }, {
          onClick: () => setColor("black"), to: "/contacts"
        }], ["Home", "About", "Contacts"])} /> */}
      </Router>

    </div>
  )
}


