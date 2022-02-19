import React from 'react'
import './footer.css';
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import dubbsLogo from "../assets/header/img.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLogoContainer'>
                <img src={dubbsLogo} className='footerLogo' />
            </div>

            <div className='footerActions'>

                <div className='discordContainer'>
                    <img src={discordIcon}/>
                </div>

                <div className='instagramContainer'>
                    <img src={instagramIcon}/>
                </div>

                <div className='twitterContainer'>
                    <img src={twitterIcon}/>
                </div>

                <div className='mintButton'>
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                    Mint
                </div>
            </div>
        </div>
    )
}

export default Footer