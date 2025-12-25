import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <ul className="h-[100%] w-[30%] flex justify-between item-center m-4 ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
        </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
        </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
    </ul>
   
  )
}

export default NavMenu
