import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';
import App from '../App';
import Timer from "../Components/Timer";
import Team from "../Components/Team"
import Mint from '../Components/Mint'
import Faq from "../Components/Faq"
import About from "../Components/About"
import reportWebVitals from '../reportWebVitals';
import TermsAndConditions from "../Components/PrivacyPolicy";
import PrivacyPolicy from "../Components/PrivacyPolicy";

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

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {About} />
            <Route path = "/mint" component = {Mint} />
            <Route path = "/team" component = {Team} />
            <Route path = "/termsAndConditions" component={TermsAndConditions} />
            <Route path = "/privacyPolicy" component={PrivacyPolicy} />
        </Router>
    );
};
export default Webpages;