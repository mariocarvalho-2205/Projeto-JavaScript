// components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Aside from "./components/Aside/Aside"
import Section from "./components/Section/Section"


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="grid">

        <div className="header">
          <Header/>
        </div>
        
        <div className="aside">
          <Aside/>
        </div>

        <div className="section">
          <Section/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
