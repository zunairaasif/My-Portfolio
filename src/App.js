import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import NotFound from "./components/layouts/NotFound";
import ScrollToTop from "./components/common/ScrollToTop";
import ProjectDetail from "./components/layouts/ProjectDetail";

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {isFalse || <Navbar />}
      <div className="flex-grow px-5 md:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
      {isFalse || <Footer />}
    </div>
  );
}

export default App;
