import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import RoadMap from "./Components/RoadMap";
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Metamask from "./Components/Metamask";
import Team from "./Components/Team"
import Mint from './Components/Mint'
import Faq from "./Components/Faq"
import About from "./Components/About"
import CTA from "./Components/CTA";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "./mintAbi.json"
import FaqJr from "./Components/FaqJr";
import Timer from "./Components/Timer";
import Webpages from './webpages';
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import background from './assets/background.jpg'
import App2 from "./App2";
import CookieConsent from "react-cookie-consent";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

    return (
        <div className='app'>
            <Timer/>
                <Header/>
                    <Trailer/>
                        <About/>
                            <Team/>
                                <Faq/>
                                    <CookieConsent debug={true} location="bottom" buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px"}}
                                        style={{background: "#1e1e1e"}}>
                                        Our website uses cookies to improve your experience 🍪
                                    </CookieConsent>
                                        <Footer />

        </div>
    )
}export default App
