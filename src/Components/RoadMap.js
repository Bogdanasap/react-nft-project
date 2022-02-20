import React from 'react'
import './road.css'
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




    return (



        <div className='road-map'>
            <div className="space">

            </div>
            <div className="row">
           <div className="dot">
               <img src={bone}/>
           </div>

            <div className='dot'>

            </div>

            <div className='dot'>

            </div>

            <div className='dot'>

            </div>
            </div>

        </div>
    )

}

export default Road
