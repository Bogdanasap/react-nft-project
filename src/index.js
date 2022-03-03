import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Timer from "./Components/Timer";

import App from "./App"
import Team from "./Components/Team"
import Mint from './Components/Mint'
import Faq from "./Components/Faq"
import About from "./Components/About"
import Footer from "./Components/Footer";
import reportWebVitals from './reportWebVitals';
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import Header from "./Components/Header";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


 */

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/team" element={<Team/>}/>
        </Routes>
    </Router>,

    document.getElementById("root")
);