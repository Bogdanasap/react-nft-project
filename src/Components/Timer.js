import React from 'react'
import './Timer.css'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import discordIcon from '../assets/assets_website/discord-black-icon-703937.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import searchIcon from '../assets/header/search.png'


const Timer  = () => {

    let  curTime = new Date().toLocaleString();
    const [counter, setCounter] = React.useState(curTime);
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="timer">MINT AVAILABLE IN: {counter}</div>
    )

}

export default Timer
