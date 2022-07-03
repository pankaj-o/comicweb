import React from 'react'
import "./Navbar.css"


import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
            
            </div>
            <div className="navbar_maincentre">
                <ul className="navbarcentrelist">
                    <li className="listitemcentre"><NavLink to="/">Home</NavLink></li>
                    
                    
                    <li className="listitemcentre"><NavLink to="*">About Us</NavLink></li>
                    <li className="listitemcentre"><NavLink to="*">Contact</NavLink></li>
                  
                    
                    
                </ul>
            </div>
            <div className="navbar_mainright">
                <ul className='navbarrightlist'>
                    <li className="list_item_right_search">
                        <div className="search">
                            <form  className="searchform"action="#">
                                {/* <input classnametype="text" placeholder="Search"></input> */}
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </form>
                        </div>
                    </li>
                    <li className="list_item_right_signin">
                    <NavLink to="/signin">Sign-In</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}