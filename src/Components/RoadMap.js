import React from 'react'
import './road.css'
import bone from'../assets/bone-removebg-preview.png'
import nft from'../assets/nft.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "../../src/mintAbi.json"
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



const Road = () => {

    const [accounts, setAccounts] = useState([]);
    async function connectAccounts() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    useEffect(() => {
        connectAccounts();
    }, []);

    //MINTAT COAIE

    const [mintAmount, setMintAmount] = useState(1);
    const [text, setText] = useState(["NFT"]);

    async function handleMint() {
        if ( window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                mintAddress,
                mint.abi,
                signer
            );
            try {
                const  response = await contract.mint(BigNumber.from(mintAmount));
                console.log("response ", response);
            }
            catch (err) {
                console.log("error: ", err);
            }
        }
    }

    function numberOfMintsDecrease() {

        if(mintAmount<=2)
        {
            setText("NFT");
            ok=0;
            console.log(mintAmount);
        }

        if(mintAmount>=1)
            setMintAmount(mintAmount-1)

    }

    function numberOfMintsIncrease() {

        if(mintAmount>=1) {
            setText("NFTS");
            ok=1;
            console.log(mintAmount);
        }

            setMintAmount(mintAmount+1)
    }

    let ok =0;

    function showMint() {

    }





    function functions() {
        numberOfMintsDecrease();
        showMint();
    }

    function functions1() {
        numberOfMintsIncrease()
        showMint();
    }

    function functions2() {
        handleMint()
    }



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

            <div className="column">
                <div className="card">
                    <img className='contract-pic' src={nft}/>
                        <div className="container">
                            <h2>Dog 1</h2>
                            <p className="title">Daca nu merge asta ma arunc pe geam</p>
                            {accounts.length && (
                                <div>
                                    <button onClick={functions} className="mint-button-sign">-</button>
                                    <button onClick={functions2} className="mint-button">MINT {mintAmount} {text}</button>
                                    <button className="mint-button-sign" onClick={functions1}>+</button>
                                </div>
                            )}
                        </div>
                </div>
            </div>
            </div>

        </div>
    )

}

export default Road
