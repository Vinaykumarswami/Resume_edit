import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthMenu = () => {
  return (
    <ul className="flex justify-around text-center text-1xl">
      <li className="space-x-1 m-5">
        <NavLink to={"/login"}>
           Login 
        </NavLink>
        </li>
       <br /> <br />
        <li className="space-x-1 m-5">
            <NavLink to={"/register"}>
                Register
            </NavLink>
        </li>
    </ul>
  )
}

export default AuthMenu
