import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutme from './components/Aboutme/Aboutme';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
