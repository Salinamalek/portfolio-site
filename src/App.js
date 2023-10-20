import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
