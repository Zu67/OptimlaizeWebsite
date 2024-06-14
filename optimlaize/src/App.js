import './App.css';
import {
  Navigation,
  Footer,
  Home,
  AboutUs,
  Service,
  CaseStudies,
  Demo,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer/>
      </Router>

    </div>
  );
}

export default App;
