import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Details from './Pages/Home/Details';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className=" mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Details />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      

    </div>
  );
}

export default App;
