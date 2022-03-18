import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import dubbsLogo from "../assets/header/img.png";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {

    function moveToMint() {
        window.location.href = 'http://localhost:3000/mint'
    }

    function moveToTop(){
        window.scrollTo(0, 0);
    }

    function moveToTwitter(){
        window.location.href = "https://twitter.com/nftshub_";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub_/";
    }

    return (
        <div className='footer'>
                <div className='footerLogo' onClick={moveToTop}>
                    <img src={dubbsLogo} className='footerLogo' />
                    <div className='footerLogo text-footer'>
                        DobberLads
                    </div>
                </div>
                <div className="footerItems">
                    <p className='terms'>Terms of Service</p>
                    <p className='dash'>|</p>
                    <p className='privacy'>Privacy Policy</p>
                </div>

        </div>

    )
}

export default Footer