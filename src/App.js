/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer.jsx';


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}



function Navbar(params) {
  const [isNavToggled, setIsNavToggled] = useState(false)

  if (useWindowSize()[0] < 768) {
    return (
      <div>
        <div className={isNavToggled ? "sideNavigation slideOut" : "sideNavigation slideIn"}>
          <div className="button close" onClick={(e) => {
            e.preventDefault()
            setIsNavToggled(false)

          }}>X</div>
          <ul>
            {params.links}
          </ul>

        </div>


        <div className="burger button" onClick={(e) => {
          e.preventDefault();
          setIsNavToggled(true)

        }} ></div>
      </div >

    )
  } else {
    return (
      <ul className="navBar">{params.links}</ul>
    )
  }

}


const getLinksWithParams = (params, label) => {
  return params.map((param, i) => {
    return <li key={i}><Link key={i} {...param} >{label[i]}</Link></li>
  })
}


export default function App() {
  const [color, setColor] = useState("white")

  return (
    <div>


      <Router>
        <div>
          <Navbar links={getLinksWithParams([{
            style: { color: color }, onClick: () => setColor("white"), to: "/home"
          }, {
            style: { color: color }, onClick: () => setColor("black"), to: "/about"
          }, {
            style: { color: color }, onClick: () => setColor("black"), to: "/contacts"
          }], ["Home", "About", "Contacts"])} />


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


        <Footer links={getLinksWithParams([{
          onClick: () => setColor("white"), to: "/home"
        }, {
          onClick: () => setColor("black"), to: "/about"
        }, {
          onClick: () => setColor("black"), to: "/contacts"
        }], ["Home", "About", "Contacts"])} />
      </Router>

    </div>
  )
}


