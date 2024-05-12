import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import DynamicTitle from "./components/DynamicTitle";

createRoot(document.getElementById("root")).render(
  <Router>
    <DynamicTitle />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);
