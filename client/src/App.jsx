// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import your components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import FranchiseeForm from "./components/pages/FranchiseeForm";
import FranchiseVerify from "./components/pages/FranchiseVerify";
import ListCenter from "./components/pages/ListCenter";
import CenterLogin from "./components/pages/CenterLogin";
import StudentForm from "./components/pages/StudentForm";
import EnrollmentVerification from "./components/pages/EnrollmentVerification";
import GetResult from "./components/pages/GetResult";
import GetCertificate from "./components/pages/GetCertificate";
import GetAdmitCard from "./components/pages/GetAdmitCard";
import StudentLogin from "./components/pages/StudentLogin";
import ContactUs from "./components/pages/ContactUs";

function App() {
  // Track if the header is scrolled to apply appropriate class to main
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <motion.main
          className={`flex-grow ${isHeaderScrolled ? "header-scrolled" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/franchisee-form" element={<FranchiseeForm />} />
            <Route path="/franchise-verify" element={<FranchiseVerify />} />
            <Route path="/list-center" element={<ListCenter />} />
            <Route path="/center-login" element={<CenterLogin />} />
            <Route path="/student-form" element={<StudentForm />} />
            <Route
              path="/enrollment-verification"
              element={<EnrollmentVerification />}
            />
            <Route path="/get-result" element={<GetResult />} />
            <Route path="/get-certificate" element={<GetCertificate />} />
            <Route path="/get-admit-card" element={<GetAdmitCard />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
