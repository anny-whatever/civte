// src/components/common/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageLogo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [franchiseDropdownOpen, setFranchiseDropdownOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);

  // Mobile accordion state
  const [mobileDropdowns, setMobileDropdowns] = useState({
    franchise: false,
    student: false,
  });

  // Handle scroll events to add shadow and reduce padding when scrolling
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-wrapper")) {
        setFranchiseDropdownOpen(false);
        setStudentDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile accordion dropdown
  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Navigation links structured according to the requirements
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    {
      name: "Franchise",
      isDrop: true,
      id: "franchise",
      dropItems: [
        { name: "Apply for Franchise", path: "/franchisee-form" },
        { name: "Franchise Verification", path: "/franchise-verify" },
        { name: "Study Center List", path: "/list-center" },
        { name: "Center Login", path: "/center-login" },
      ],
    },
    {
      name: "Student",
      isDrop: true,
      id: "student",
      dropItems: [
        { name: "Online Admission", path: "/student-form" },
        { name: "Enrollment Verification", path: "/enrollment-verification" },
        { name: "Result Verification", path: "/get-result" },
        { name: "Certificate Verification", path: "/get-certificate" },
        { name: "Admit Card", path: "/get-admit-card" },
        { name: "Student Login", path: "/student-login" },
      ],
    },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // For desktop: Toggle franchise dropdown
  const toggleFranchiseDropdown = () => {
    setFranchiseDropdownOpen(!franchiseDropdownOpen);
    setStudentDropdownOpen(false);
  };

  // For desktop: Toggle student dropdown
  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!studentDropdownOpen);
    setFranchiseDropdownOpen(false);
  };

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-12 md:h-20 w-12 md:w-20 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden"
            >
              <img
                src={imageLogo}
                alt="CIVTE Logo"
                className="w-10 h-10 md:w-16 md:h-16 object-contain"
              />
            </motion.div>
            <div className="ml-2">
              <h1 className="text-sm md:text-xl font-bold text-[#EC0729] leading-tight">
                Central Institute of Vocational
              </h1>
              <h2 className="text-sm md:text-xl font-bold text-[#EC0729] leading-tight">
                & Technical Education
              </h2>
              <p className="text-xs text-gray-500">Government Recognized</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1 items-center">
              {navLinks.map((link) =>
                link.isDrop ? (
                  <li key={link.name} className="relative dropdown-wrapper">
                    <button
                      onClick={
                        link.name === "Franchise"
                          ? toggleFranchiseDropdown
                          : toggleStudentDropdown
                      }
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC0729] hover:text-white transition-colors flex items-center h-full"
                    >
                      {link.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          (link.name === "Franchise" &&
                            franchiseDropdownOpen) ||
                          (link.name === "Student" && studentDropdownOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {((link.name === "Franchise" && franchiseDropdownOpen) ||
                      (link.name === "Student" && studentDropdownOpen)) && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 py-1">
                        {link.dropItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EC0729] hover:text-white transition-colors"
                            onClick={() => {
                              setFranchiseDropdownOpen(false);
                              setStudentDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC0729] hover:text-white transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  to="/student-login"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-[#EC0729] text-white hover:bg-red-700 transition-colors block"
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

        {/* ACCORDION-STYLE Mobile Navigation Menu */}
        {isOpen && (
          <motion.nav
            className="lg:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-1">
              {/* Regular links */}
              {navLinks
                .filter((link) => !link.isDrop)
                .map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#EC0729] hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

              {/* Dropdown links with accordion style */}
              {navLinks
                .filter((link) => link.isDrop)
                .map((link) => (
                  <li
                    key={link.name}
                    className="border-t border-gray-100 first:border-t-0"
                  >
                    {/* Accordion header */}
                    <button
                      onClick={() => toggleMobileDropdown(link.id)}
                      className="flex justify-between items-center w-full px-3 py-3 text-base font-medium text-left hover:bg-gray-50 focus:outline-none transition-colors"
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          mobileDropdowns[link.id] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {/* Accordion content */}
                    {mobileDropdowns[link.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50"
                      >
                        <ul className="py-2 pl-6 border-l-2 border-gray-200 ml-3">
                          {link.dropItems.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                className="block px-3 py-2 text-base text-gray-700 hover:text-[#EC0729] transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </li>
                ))}

              {/* Login button */}
              <li className="mt-2 pt-2 border-t border-gray-100">
                <Link
                  to="/student-login"
                  className="block px-3 py-3 rounded-md font-medium bg-[#EC0729] text-white hover:bg-red-700 transition-colors text-center"
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
