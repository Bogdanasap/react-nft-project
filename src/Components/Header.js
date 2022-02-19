import React from 'react'
import './header.css'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import searchIcon from '../assets/header/search.png'


const Header = () => {
    return (
        <div className='header'>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <div className='logoContainer'>
                <img src={dobbsLogo} className='dubbLogo' alt=''/>
            </div>
            <div className='headerItems'>
                    <p>ABOUT</p>
                <p>ROADMAP</p>
                <p>FAQ</p>
            </div>
            <div className='headerActions'>
                <div className='discordContainer'>
                    <img src={discordIcon}/>
                </div>
                <div className='instagramContainer'>
                    <img src={instagramIcon}/>
                </div>
                <div className='twitterContainer'>
                    <img src={twitterIcon}/>
                </div>
            </div>
            <div className='mintButton'>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                Mint
            </div>
        </div>
    )

}

export default Header
