import React from 'react'
import './road.css'
import './RoadMap.scss'
import roadmap from "../assets/owner/raodmap.png"
import bone from'../assets/bone-removebg-preview.png'
import nft from'../assets/Aqua.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "../../src/mintAbi.json"
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



const Road = () => {


    /*

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

// example use
    var div = React.findDOMNode(this.refs.bone).value;
    var divOffset = offset(div);
    console.log(divOffset.left, divOffset.top);

*/


   // style={{ backgroundImage: `url(${roadmap})` }} className='road-map'

    return (

        <div className="background">
            <div className="div-up-right">
            </div>
            <div className="div-up-left">
            </div>
            <div className="section">
                <p className="text-objective-left border radial-repeating">Objective 1</p>
                <p className="text-description-right ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam. Suspendisse nec elementum leo. Proin a porttitor nibh. Vestibulum posuere ex nulla, eget egestas nunc tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis purus interdum, pretium eros vitae, tincidunt orci. Pellentesque ut eros sit amet velit fermentum suscipit.</p>
            </div>
            <div className="div-up-right">
            </div>
            <div className="div-up-left">
            </div>
            <div className="section">
                <p className="text-objective-right border radial-repeating">Objective 2</p>
                <p className="text-description-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam. Suspendisse nec elementum leo. Proin a porttitor nibh. Vestibulum posuere ex nulla, eget egestas nunc tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis purus interdum, pretium eros vitae, tincidunt orci. Pellentesque ut eros sit amet velit fermentum suscipit.</p>
            </div>
            <div className="div-up-right">
            </div>
            <div className="div-up-left">
            </div>
            <div className="section">
                <p className="text-objective-left border radial-repeating">Objective 3</p>
                <p className="text-description-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam. Suspendisse nec elementum leo. Proin a porttitor nibh. Vestibulum posuere ex nulla, eget egestas nunc tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis purus interdum, pretium eros vitae, tincidunt orci. Pellentesque ut eros sit amet velit fermentum suscipit.</p>
            </div>
            <div className="div-up-right">
            </div>
            <div className="div-up-left">
            </div>
            <div className="section">
                <p className="text-objective-right border radial-repeating">Objective 4</p>
                <p className="text-description-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tincidunt dui, ac dapibus diam. Suspendisse nec elementum leo. Proin a porttitor nibh. Vestibulum posuere ex nulla, eget egestas nunc tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis purus interdum, pretium eros vitae, tincidunt orci. Pellentesque ut eros sit amet velit fermentum suscipit.</p>
            </div>
            <div className="div-up-right">
            </div>
            <div className="div-up-left">
            </div>
        </div>
    )

}

export default Road
