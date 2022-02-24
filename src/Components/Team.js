import React from 'react'
import "./team.css"
import CalinDobb from "../Nfts/Lime.png";
import BobocDobb from "../Nfts/Orange.png";
import RaduDobb from "../Nfts/Pink.png";
import BogdanDobb from "../assets/Aqua.png"
import StefanDobb from '../Nfts/Cyan.png';
import AnaDobb from "../Nfts/Beige.png";
import VladDobb from "../Nfts/Purple.png";
import "./Mint.scss";

const Team = () => {
    return (
       <div className='characters'>
           <div className="developerContainer">
               <div className="devh2">
                   <h2>DEV TEAM</h2>
               </div>
               <div className="images1">
                   <div className="bogdan rainbow1">
                        <img src={BogdanDobb} className={'bogdan'}/>
                   </div>
                   <div className="boboc rainbow2">
                       <img src={BobocDobb} className={'boboc'}/>
                   </div>
               </div>
               <div className="developers">
                   <div className="devh3">
                       <h3>Bogdan</h3>
                       <h3>Boboc</h3>
                   </div>
               </div>
           </div>
           <div className="marketingContainer">
               <div className="marketingh2">
                   <h2>MARKETING TEAM</h2>
               </div>
                   <div className="images2">
                       <div className="calin rainbow3">
                           <img src={CalinDobb} className='calin'/>
                       </div>
                       <div className="radu rainbow4">
                            <img src={RaduDobb} className={'radu'}/>
                       </div>
                   </div>
                   <div className='marketing1h3'>
                       <h3>Calin</h3>
                       <h3>Radu</h3>
                   </div>
                   <div className="images3">
                       <div className="stefan rainbow5">
                            <img src={StefanDobb} className='stefan'/>
                       </div>
                       <div className="vlad rainbow6">
                            <img src={VladDobb} className={'vlad'}/>
                       </div>
                   </div>
                   <div className="marketing2h3">
                       <h3>Stefan</h3>
                       <h3>Vlad</h3>
                   </div>
           </div>
           <div className="designContainer">
               <div className="designh2">
                   <h2>DESIGN TEAM</h2>
               </div>
               <div className="images4">
                   <div className="ana rainbow7">
                        <img src={AnaDobb} className='ana'/>
                   </div>
               </div>
               <div className="designh3">
                   <h3>Ana</h3>
               </div>
           </div>
       </div>
    )
}

export default Team