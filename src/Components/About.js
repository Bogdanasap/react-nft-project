import React from 'react'
import './about.css'
import nft1 from '../Nfts/img.png';
import nft2 from '../Nfts/img_1.png';
import './Mint.scss'

const About = () => {
    return (
        <div className='stories'>

                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
                <div className="story1">
                    <div className='box1'>
                        <h2>WHAT IS DRIPPYDOBS?</h2>
                    <p>
                        DrippyDobs is a collection of 10,000 Dobberman NFTs.
                        When the DobberLads team were having a drink in the laboratory, they all started imagining a world populated by the most fashionable dogs, Dobermans.
                        They kept trying to find a way to tell people about their vision but couldn't find a way to do so. At some point, they finally got it.
                        What if they created a virtual world full of beautiful dobermans and put it on a blockchain so that every dog enthusiast could get their very own drippy doberman.
                    </p>
                </div>
                    <div className="image1 rainbow5">
                        <img src={nft1} className='image1'/>
                    </div>
            </div>
                 <div className="story2">
                     <img src={nft2} className='image2 rainbow8'/>
                     <div className='box2'>
                       <h2>WHAT IS DOBBERLADS?</h2>
                     <p>
                        DobberLads is a team of 5 guys that share a passion for dogs.
                        Our mission is to bring Dobbermans to the ERC-271 blockchain and give every one of you a chance to own your very own custom Doberman NFT.
                        We will bring our NFTs to the Metaverse with an app ready to offer functionality and battle procrastination.
                        We have nothing but good intentions for our fans and the environment and we'd love to welcome you guys in our community.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About