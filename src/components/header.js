import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='books'>bookslist</NavLink></li>
            <li><NavLink to='about'>about</NavLink></li>
           
        </ul>
    </div>
  )
}

export default Header