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
        window.location.href = "https://twitter.com/nftshub";
    }

    function moveToDiscord(){
        window.location.href = "http://discord.gg/ZjtUSx9DjK";
    }

    function moveToInsta(){
        window.location.href = "https://www.instagram.com/nftshub/";
    }

    return (
        <div className='footer'>
            <Row>
                <Col><div className='footerLogo' onClick={moveToTop}>
                    <img src={dubbsLogo} className='footerLogo' />
                </div></Col>
                <Col><div className='discordContainer ' onClick={moveToDiscord}>
                    <img src={discordIcon}/>
                    <a href="https://discord.com/"></a>
                </div>

                    <div className='instagramContainer' onClick={moveToInsta}>
                        <img src={instagramIcon}/>
                    </div>

                    <div className='twitterContainer' onClick={moveToTwitter}>
                        <img src={twitterIcon}/>
                    </div></Col>
                <Col><button onClick={moveToMint} className='mintButton'>
                    <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>
                    Mint
                </button></Col>
            </Row>
        </div>

    )
}

export default Footer