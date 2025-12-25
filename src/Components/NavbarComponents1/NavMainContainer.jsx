import React from 'react'
import Logo from './Logo'
import SearchBar from './searchBar'
import AuthMenu from './AuthMenu'
import NavMenu from './NavMenu'

const NavMainContainer = () => {
  return (
    <section className="h-[70px] w-[100vw] border bg-pink-200">
        <nav className="h-[100%] w-[95%] m-auto flex justify-between item-center">
            <Logo/>
            <SearchBar/>
            <NavMenu/>
            <AuthMenu/>
        </nav>
    </section>
  )
}

export default NavMainContainer
