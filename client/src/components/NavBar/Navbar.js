  
import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { FaCalculator, FaBuilding, FaRegShareSquare } from "react-icons/fa";

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">Mortgage calculator</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/banks"><FaBuilding color="rgb(255, 255, 255)" size="30px"/> Banks</NavLink></li>
          <li><NavLink to="/calculator"><FaCalculator color="rgb(255, 255, 255)" size="30px"/> Calculator</NavLink></li>
          <li><a href="/" onClick={logoutHandler}><FaRegShareSquare color="rgb(255, 255, 255)" size="30px"/> Log out</a></li>
        </ul>
      </div>
    </nav>
  )
}