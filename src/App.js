import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from './Works';
import Contact from './Contact';
import About from './About';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
