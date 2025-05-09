import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"; // Assuming you have the Nav component
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Accounting from "./pages/Accounting";
import BusinessIncorporation from "./pages/BusinessIncorporation";
import Taxation from "./pages/Taxation";
import ManagementConsulting from "./pages/ManagementConsulting";
import Footer from "./components/Footer";
import TopContactMarquee from "./components/TopContactMarquee";
import USTaxFilling from "./pages/USTaxFilling";
import ScrollToTop from "./hooks/ScrollToTop";



function App() {
  return (
    <>
      <Router>
        <TopContactMarquee />
        <Nav />
    <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/accounting" element={<Accounting />} />
          <Route
            path="/services/business-incorporation"
            element={<BusinessIncorporation />}
          />
          <Route path="/services/taxation" element={<Taxation />} />
          <Route
            path="/services/management-consulting"
            element={<ManagementConsulting />}
          />
          <Route path="/services/us-tax-filling" element={<USTaxFilling />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
