import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Details from './Pages/Home/Details';
import Footer from './Pages/Shared/Footer';
import About from './Pages/Home/About';
import Services from './Pages/Home/Services';
import Projects from './Pages/Home/Projects';
import Skills from './Pages/Home/Skills';
import Contact from './Pages/Home/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Details />} />
        
        
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
