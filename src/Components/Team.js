import React from 'react'
import "./team.css"
import EugenDobb from "../Nfts/Lime.png";
import BobocDobb from "../Nfts/Orange.png";
import RaduDobb from "../Nfts/Pink.png";
import BogdanDobb from "../assets/Aqua.png"
import StefanDobb from '../Nfts/Cyan.png';
import CristianaDobb from "../Nfts/Beige.png";
import VladDobb from "../Nfts/Purple.png";
import "./Mint.scss";

const Team = () => {
    return (
        <div className='diagonal'>
        <div className='container'>
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
            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Bogdan</h1>
                        <div className="bogdan">
                            <img src={BogdanDobb} className={'bogdan'}/>
                        </div>
                    </div>
                   </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Boboc</h1>
                        <div className="boboc">
                            <img src={BobocDobb} className={'boboc'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Eugen</h1>
                        <div className="eugen">
                            <img src={EugenDobb} className='eugen'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Stefan</h1>
                        <div className="stefan">
                            <img src={StefanDobb} className='stefan'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Cristiana</h1>
                        <div className="cristiana">
                            <img src={CristianaDobb} className='cristiana'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Vlad</h1>
                        <div className="vlad">
                            <img src={VladDobb} className={'vlad'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card1">
                <div className="icon">
                    <div className="content">
                        <h1 className='names'>Radu</h1>
                        <div className="radu">
                            <img src={RaduDobb} className={'radu'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>



    )
}

export default Team