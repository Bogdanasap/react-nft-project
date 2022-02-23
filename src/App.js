import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import RoadMap from "./Components/RoadMap";
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Metamask from "./Components/Metamask";
import Team from "./Components/Team"
import Faq from "./Components/Faq"
import About from "./Components/About"
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "./mintAbi.json"
import Mint from "./Components/Mint";
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/TTF/Archive-Regular.ttf";
import "./Fonts/Roboto/Roboto-Black.ttf";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function App() {



  return (
      <div className='app'>
        <Header/>
          <Trailer/>
            <About/>
                <RoadMap/>
                  <Mint/>
                    <Faq/>
                        <Footer/>
      </div>
  )
}

export default App;
