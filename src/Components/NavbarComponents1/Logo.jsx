import React from 'react'
import {NavLink} from "react-router-dom"

const Logo = () => {
  return (
    <picture>
        <NavLink to={"/"}>
        <img src="https://media.istockphoto.com/id/871461336/vector/icon-for-business-management-recruitment-of-employees-team-work.jpg?s=612x612&w=0&k=20&c=FRna_epaMZsMGJN8ubve0pvEStVWQNzIyMy0lla91Ow=" alt="" className="h-15 rounded-3xl w-15 hover:caret-amber-400" />
        </NavLink>
    </picture>
  )
}

export default Logo;
