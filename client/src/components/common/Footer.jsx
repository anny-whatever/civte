// src/components/common/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Remove this import that's causing errors:
// import logoImage from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#EC0729]">
              About CIVTE
            </h3>
            <div className="flex items-center mb-4">
              {/* Replace with placeholder image */}
              <img
                src="https://via.placeholder.com/80"
                alt="CIVTE Logo"
                className="h-12 mr-2"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Central Institute of
                </h4>
                <h4 className="font-semibold text-gray-800">
                  Vocational & Technical Education
                </h4>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              CIVTE is run by VESP, an autonomous body registered under the
              Societies Registration Act 1860 and recognized by the Government
              of India. We provide skill development and vocational training
              across India.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#EC0729]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-[#EC0729] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Student Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#EC0729]">
              Student Services
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/student-login"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Student Login
                </Link>
              </li>
              <li>
                <Link
                  to="/enrollment-verification"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Enrollment Verification
                </Link>
              </li>
              <li>
                <Link
                  to="/get-result"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Get Result
                </Link>
              </li>
              <li>
                <Link
                  to="/get-certificate"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Get Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="/get-admit-card"
                  className="hover:text-[#EC0729] transition-colors"
                >
                  Get Admit Card
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#EC0729]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Near RMD College, Warje, Pune 411058</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+91 9306956308</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>info@civte.in</span>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-[#EC0729] hover:text-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#EC0729] hover:text-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#EC0729] hover:text-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#EC0729] hover:text-red-700 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section with Yellow Background */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="bg-[#FEE900] py-4 px-6 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-800 text-sm mb-2 md:mb-0">
                © {new Date().getFullYear()} Central Institute of Vocational &
                Technical Education. All Rights Reserved.
              </p>
              <div className="text-gray-800 text-sm">
                <span>Designed by Team CIVTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
