import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header-container'>
      <div className='logo'>
        Bella
      </div>
      <ul>
        <li>
          <NavLink 
           style={({ isActive }) => (isActive ? {color: "brown",border:"1px solid black", padding:"5px"} : {color:"black"})}
           className="link"
           to="/"
          >
            Home
          </NavLink>
         </li>
         <li>
          <NavLink
           style={({ isActive }) => (isActive ? {color: "brown",border:"1px solid black", padding:"5px"} : {color:"black"})}
           className="link"
           to="/shop"
          >
            Shop
          </NavLink>
          </li>
          <li>
          <NavLink
           style={({ isActive }) => (isActive ? {color: "brown",border:"1px solid black", padding:"5px"} : {color:"black"})}
           className="link"
           to="/favorites"
          >
            Favourites
          </NavLink>
          </li>
          <li>
          <NavLink
           style={({ isActive }) => (isActive ? {color: "brown",border:"1px solid black", padding:"5px"} : {color:"black"})}
           className="link"
           to="/orders"
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header