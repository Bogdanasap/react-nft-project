import React from 'react'
import './footer.css';
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";
import instagramIcon from "../assets/assets_website/5ecec78673e4440004f09e77.png";
import twitterIcon from "../assets/assets_website/pngwing.com.png";
import dubbsLogo from "../assets/header/img.png";

const Footer = () => {

    function moveToMint() {
        window.scrollTo(0,1050);
    }

    return (
        <div className='footer'>
            <div className='footerLogoContainer'>
                <img src={dubbsLogo} className='footerLogo' />
            </div>

            <div className='footerActions'>

                <div className='discordContainer'>
                    <img src={discordIcon}/>
                    <a href="https://discord.com/"></a>
                </div>

                <div className='instagramContainer'>
                    <img src={instagramIcon}/>
                    <a href="https://www.instagram.com"></a>
                </div>

                <div className='twitterContainer'>
                    <img src={twitterIcon}/>
                    <a href="https://twitter.com/home"></a>
                </div>
                    <button onClick={moveToMint} className='mintButton'>
                        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                        Mint
                    </button>
            </div>
        </div>
    )
}

export default Footer