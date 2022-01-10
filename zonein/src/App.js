import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Output from "./pages/Output";

function App() {
  return (
    <div className='body'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slider" element={<Output />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
