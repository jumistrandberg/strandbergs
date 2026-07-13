import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Career from "./views/Career";
import Contact from "./views/Contact";

function App() {
  return (
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <BlobComponent />
        <HeroComponent />
        <AboutSection />
        <TeamSection />
        <ContactSection /> */}
      </BrowserRouter>
  );
}

export default App;