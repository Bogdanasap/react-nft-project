import React from 'react'
import './header.css'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import { NavLink } from "react-router-dom";
import searchIcon from '../assets/header/search.png'


export function getCurrentDate(separator=''){
    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
}

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

    function moveToTwitter(){
        window.location.href = "https://twitter.com/nftshub";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub/";
    }

    const [counter, setCounter] = React.useState(60);

    // Timer
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    return (

        <div className='header'>
            <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
            <NavLink style={{ textDecoration: 'none' }} className='logoContainer' to="/">
            <div className='logoContainer'>
                <img src={dobbsLogo} className='dubbLogo' alt=''/>
            </div>
             </NavLink>
            <div className='headerItems'>
                <NavLink style={{ textDecoration: 'none' }} className='headerItems' to="/about">
                <p onClick={moveToAbout}>ABOUT</p>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className='headerItems' to="/roadmap">
                <p onClick={moveToRoadmap}>ROADMAP</p>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} className='headerItems' to="/faq">
                <p onClick={moveToFAQ}>FAQ</p>
                </NavLink>
            </div>

            <div className='headerActions'>
                <div className="instagramContainer" onClick={moveToInsta}>
                    <img src={instagramIcon}/>
                </div>
                <div className="twitterContainer" onClick={moveToTwitter}>
                    <img src={twitterIcon}/>
                </div>
                <div className="discordContainer" onClick={moveToDiscord}>
                    <img src={discordIcon}/>
                </div>
            </div>
            <NavLink style={{ textDecoration: 'none' }} className='headerItems' to="/mint">
            <button onClick={moveToMint} className='mintButton'>
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                Mint
            </button>
            </NavLink>
        </div>
    )

}

export default Header
