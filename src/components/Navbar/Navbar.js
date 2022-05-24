import React from 'react'
import "./Navbar.css"
import img from "./logo1.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                style={{backgroundImage:`url(${img})`}}
                {/* <a href="#"><img src={'img'} alt="logo" /></a> */}
            </div>
            <div className="navbar_maincentre">
                <ul className="navbarcentrelist">
                    <li className="listitemcentre"><h2>home</h2></li>
                    <li className="listitemcentre"><h2>movie</h2></li>
                    <li className="listitemcentre"><h2>about</h2></li>
                    <li className="listitemcentre"><h2>price</h2></li>
                    <li className="listitemcentre"><h2>blog</h2></li>
                </ul>
            </div>
            <div className="navbar_mainright">
                <ul className='navbarrightlist'>
                    <li className="list_item_right_search">
                        <div className="search">
                            <form action="#">
                                <input classnametype="text" placeholder="Find Favorite Movie"></input>
                                <button>search</button>
                            </form>
                        </div>
                    </li>
                    <li className="list_item_right_signin">
                        <a href="#" class='buttonsignin'>sign in</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}