import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contacts from './components/Contacts/Contacts.jsx'



export default function App() {
  const [color, setColor] = useState("white")
  return (
    <div>

      <Router>
        <div>
          <nav>
            <ul className="navBar">
              <li >
                <Link style={{ color: color }} onClick={() => setColor("white")} to="/">Home</Link>
              </li>
              <li >
                <Link style={{ color: color }} onClick={() => setColor("black")} to="/about">About</Link>
              </li>
              <li >
                <Link style={{ color: color }} onClick={() => setColor("black")} to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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
      </Router>

    </div>
  )
}


