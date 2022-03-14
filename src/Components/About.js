import './about.css'
import './Mint.scss'

import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = 'About';
    });
    return (
        <div className='diagonal'>

        <div className='stories'>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>
                        <h2>WHAT IS DOBBERLADS?</h2>
                    <p className='non-hoverAbout'>
                        🦴 DobberLads is the best entry-level collection of 10,000 NFTs. Having its spotlight on Dobermans, the art comes up as an exquisite acquisition for any Metaverse gallery.
                        </p>
                </div>
            </div>
                 <div className="story2">
                     <div className='box2'>
                       <h2>WHO ARE WE?</h2>
                     <p>
                         🦴 DobberLads is a team of 5 guys that share a passion for dogs.
                        Our mission is to bring Dobbermans to the ERC-271 blockchain and give every one of you a chance to own your very own custom Doberman NFT.
                        We will bring our NFTs to the Metaverse with an app ready to offer functionality and battle procrastination.
                        We have nothing but good intentions for our fans and the environment and we'd love to welcome you guys in our community.
                    </p>
                </div>
            </div>
        </div>
            <NavLink style={{ textDecoration: 'none' }} className='headerItems' to="/mint">
                <span className='mintButton1'>
                    MINT
                </span>
            </NavLink>
</div>
    )
}

export default About