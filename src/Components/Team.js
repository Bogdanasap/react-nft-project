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
        <div className='container'>
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



    )
}

export default Team