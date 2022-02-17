import React from 'react'
import './road.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import bone from'../assets/bone-removebg-preview.png'

const Road = () => {
    return (
        <div className='road-map'>
            <div>
            <span styles={{backgroundImage:`url(${bone})`}} className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            </div>
        </div>
    )

}

export default Road
