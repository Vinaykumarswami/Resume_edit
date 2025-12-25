import React from 'react'
import NavMainContainer from '../Components/NavbarComponents1/NavMainContainer'
import { Outlet } from 'react-router-dom'
import{Toaster} from 'react-hot-toast'

const MainLayouts = () => {
  return (
    <section>
      <Toaster/>
      <NavMainContainer/>
      <Outlet/>
    </section>
  )
}

export default MainLayouts
