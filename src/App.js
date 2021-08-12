/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";


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


