import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import RoadMap from "./Components/RoadMap";
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Faq from "./Components/Faq";
import About from "./Components/About";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "./mintAbi.json"
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function App() {

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


  return (
      <div className='app'>
        <Header />
          <Trailer />
            <About />
                <RoadMap />
              <h1>Daca nu merge asta ma arunc pe geam</h1>
              {accounts.length && (
                  <div>
                      <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
                      {mintAmount}
                      <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
                      <button onClick={handleMint}>MINT</button>
                  </div>
              )}
                    <Faq />
                    <Footer />
      </div>
  )
}

export default App;
