import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { ImCool } from "react-icons/im"
import { AiOutlineBars } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"


const Navbar = () => {
    //show menu state
    const [showMenu, setShowMenu] = useState(false)

    //function to toggle menu icons
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="container navbar">
            <menu>
                <ul className="nav-links" id={showMenu ? "nav-links-mobile":"nav-links-mobile-hide"}>
                    <li><a href="">Dashboard</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </menu>
            {/* adding here responsive icons for menu*/}
            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (
                    <RiCloseLine color="#BFC0C0" size={30}/>
                ) : (<AiOutlineBars color="#BFC0C0" size={30}/> 
                )}
            </div>
        </nav>
    );
};

export default Navbar;