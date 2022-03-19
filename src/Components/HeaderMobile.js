import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/owner/x.svg";
import { ReactComponent as MenuIcon } from "../assets/owner/menu.svg";
import { ReactComponent as Logo } from "../assets/owner/menu.svg";
import "./HeaderMobile.css";
import {Link} from "react-router-dom";
import dobbsLogo from "../assets/header/img.png";

const HeaderMobile = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
                <div className='logoContainer'>
                    <Link classname="no-decorations" to="/">
                        <img src={dobbsLogo} className='dubbLogo' />
                    </Link>
                </div>
                <div className='headerItems'>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option " onClick={closeMobileMenu} style={{marginRight: "15px"}}>
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)"}}>
                            <p className='abouthead' >ABOUT</p>
                        </Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu} style={{marginRight: "15px"}}>
                        <Link   to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='teamhead' >TEAM</p>
                        </Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu} style={{marginRight: "15px"}}>
                        <Link  to="/" style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='faqhead'>FAQ</p>
                        </Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu} style={{marginRight: "15px"}}>
                        <Link  k to="/"  style={{ textDecoration: 'none', color: "rgb(0,0,20)" }}>
                            <p className='road-maphead'>ROADMAP</p>
                        </Link>
                    </li>
                </ul>
                </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default HeaderMobile;
