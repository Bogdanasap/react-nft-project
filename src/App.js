import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import RoadMap from "./Components/RoadMap";
import Trailer from "./Components/Trailer.js";
import Footer from "./Components/Footer";
import Team from "./Components/Team"
import Faq from "./Components/Faq"
import About from "./Components/About"


function App() {
  return (
      <div className='app'>
        <Header />
          <Trailer />
            <RoadMap />
                <Footer />
      </div>
  )
}

export default App;
