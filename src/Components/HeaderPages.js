import React from 'react'
import './header.css'
import Timer from '../Components/Timer'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import {Link, NavLink} from "react-router-dom";
import searchIcon from '../assets/header/search.png'


export function getCurrentDate(separator=''){
    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
}

const Header = () => {

    function moveToTwitter(){
        window.location.href = "https://twitter.com/nftshub_";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub_/";
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
            <div className='logoContainer'>
                <Link to="/">
                    <img src={dobbsLogo} className='dubbLogo' />
                </Link>
            </div>
            <div className='headerItems'>
                <Link to="/">
                    <p className='abouthead' >ABOUT</p>
                </Link>
                <Link to="/">
                <p className='teamhead' >TEAM</p>
                </Link>
                <Link to="/" >
                    <p className='faqhead'>FAQ</p>
                </Link>
                <Link to="/"  style={{ textDecoration: 'none' }}>
                    <p className='road-maphead'>ROADMAP</p>
                </Link>
            </div>
            <div className='headerActions'>
                <div className="instagramContainerH" onClick={moveToInsta}>
                    <img src={instagramIcon}/>
                </div>
                <div className="twitterContainerH" onClick={moveToTwitter}>
                    <img src={twitterIcon}/>
                </div>
                <div className="discordContainerH" onClick={moveToDiscord}>
                    <img src={discordIcon}/>
                </div>
            </div>

        </div>
    )

}

export default Header
