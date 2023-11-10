import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Poneys from './page/Poneys';
import Contact from './page/Contacts';
import About from './page/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poneys" element={<Poneys />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />            
      </Routes>
    </BrowserRouter>
  );
}
export default App;
