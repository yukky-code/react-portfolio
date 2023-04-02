import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Works from './components/Works';
import Contact from '../src/Contact';
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollbar from './components/SmoothScrollbar';
import Service from './components/Service';



function App() {
  return (
    <Router>
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/service' element={<Service />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
