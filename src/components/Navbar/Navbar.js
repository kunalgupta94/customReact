import React, { Component } from 'react'
import './navbar.css'
import Hamburger from '../../assets/Hamburger'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar_main">
                <button className="navbar_hamburger_options">
                <Hamburger />
                </button>
            </nav>
        )
    }
}

export default Navbar
