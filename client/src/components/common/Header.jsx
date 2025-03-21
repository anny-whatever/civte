// src/components/common/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Import the CIVTE logo from Images 1-3 that were provided
// Remove this import that's causing errors:
// import logoImage from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Franchise", path: "/franchisee-form" },
    { name: "Centers", path: "/list-center" },
    { name: "Student", path: "/student-form" },
    { name: "Verify", path: "/franchise-verify" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar with ISO Certification and Contact */}
        <div className="flex justify-end items-center text-sm mb-2 text-gray-600 font-medium">
          <div className="flex items-center mr-4">
            <img
              src="https://via.placeholder.com/40"
              alt="ISO Certified"
              className="h-6 mr-1"
            />
            <span>ISO 9001-2015 Certified</span>
          </div>
          <div className="hidden md:flex items-center">
            <span className="mr-4">
              <i className="fas fa-phone-alt mr-1"></i> +91 9306956308
            </span>
            <span>
              <i className="fas fa-envelope mr-1"></i> info@civte.in
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              // Replace with placeholder image
              src="https://via.placeholder.com/80"
              alt="CIVTE Logo"
              className="h-16 md:h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="ml-4">
              <h1 className="text-lg md:text-xl font-bold text-[#EC0729]">
                Central Institute of Vocational
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-[#EC0729]">
                & Technical Education
              </h2>
              <p className="text-xs text-gray-500">Government Recognized</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC0729] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/student-login"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-[#EC0729] text-white hover:bg-red-700 transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden text-[#EC0729]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.nav
            className="lg:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC0729] hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/student-login"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-[#EC0729] text-white hover:bg-red-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
