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
                        <div className='non-hoverAbout'>
                       <p>
                           🦴 DobberLads is the best entry-level collection of 10,000 NFTs. Having its spotlight on Dobermans, the art comes up as an exquisite acquisition for any Metaverse gallery.
                        </p>
                            <p>
                                🦴 The lads’ development team values, above all, quality, taste and creativity, attributes found both in the character and the management of the project. They analysed in depth the extent to which a project can bring real life benefits to it’s community members,
                                thus coming forward with two major goals: bringing people together, united by some of their common interests and helping said people become more productive on a daily basis. Both of these will be attained by the perks of web3, metaverse apps and live events the team
                                has planned for you. Therefore, it is their pleasure to announce that DobberLads is more than just art, it is a continuously growing community of which anybody can be a part of. Buy your first DobberLads here
                            </p>
                        </div>
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