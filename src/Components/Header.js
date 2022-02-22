import React from 'react'
import './header.css'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import searchIcon from '../assets/header/search.png'


const Header = () => {

    function moveToMint() {
        window.scrollTo(0,800);
    }

    function moveToFAQ() {
        window.scrollTo(0,1600);
    }

    function moveToRoadmap() {
        window.scrollTo(0,900);
    }

    function moveToAbout() {
        window.scrollTo(0,800);
    }


    return (



        <div className='header'>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
            <div className='logoContainer'>
                <img src={dobbsLogo} className='dubbLogo' alt=''/>
            </div>
            <div className='headerItems'>
                <p onClick={moveToAbout}>ABOUT</p>
                <p onClick={moveToRoadmap}>ROADMAP</p>
                <p onClick={moveToFAQ}>FAQ</p>
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
            <button onClick={moveToMint} className='mintButton'>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                Mint
            </button>
        </div>
    )

}

export default Header
