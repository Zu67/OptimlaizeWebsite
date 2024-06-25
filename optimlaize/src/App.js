import './App.css';
import {
  Navigation,
  Footer,
  Home,
  AboutUs,
  CaseStudyList,
  CaseStudyDetail,
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
            <Route path="/demo" element={<Demo />} />
            <Route path="/case-study" element={<CaseStudyList />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer/>
      </Router>

    </div>
  );
}

export default App;
