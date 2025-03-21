// src/components/pages/StudentLogin.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentLogin = () => {
  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // State for form submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login verification (would connect to backend in production)
    // For demo, let's use a dummy username and password
    const isValid =
      formData.username === "student" && formData.password === "password";

    setFormStatus({
      submitted: true,
      success: isValid,
      message: isValid
        ? "Login successful! Redirecting to student dashboard..."
        : "Invalid username or password. Please try again.",
    });

    // Reset form after unsuccessful login
    if (!isValid) {
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          password: "",
        }));
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Login
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Access your student account to view your course materials, results,
            assignments, and more.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
              <h2 className="text-white font-bold text-xl">
                Student Portal Login
              </h2>
              <p className="text-white/80 mt-2">
                Enter your credentials to access your student account.
              </p>
            </div>

            <div className="p-6">
              {formStatus.submitted && (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    formStatus.success ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 ${
                        formStatus.success ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formStatus.success ? (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p
                        className={`text-sm font-medium ${
                          formStatus.success ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        {formStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username or Enrollment Number{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Enter your username or enrollment number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password <span className="text-[#EC0729]">*</span>
                    </label>
                    <a
                      href="#"
                      className="text-sm text-[#EC0729] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                  >
                    Log In
                  </button>
                </div>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/student-form"
                    className="text-[#EC0729] hover:underline font-medium"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 border-t border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    For demo purposes, use <strong>student</strong> as username
                    and <strong>password</strong> as password.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Access Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden mt-8"
          >
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Access
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/enrollment-verification"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  <svg
                    className="h-6 w-6 mx-auto text-[#EC0729] mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Verify Enrollment
                  </span>
                </Link>

                <Link
                  to="/get-result"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  <svg
                    className="h-6 w-6 mx-auto text-[#EC0729] mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Get Result
                  </span>
                </Link>

                <Link
                  to="/get-certificate"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  <svg
                    className="h-6 w-6 mx-auto text-[#EC0729] mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Get Certificate
                  </span>
                </Link>

                <Link
                  to="/get-admit-card"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  <svg
                    className="h-6 w-6 mx-auto text-[#EC0729] mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Get Admit Card
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">Need help with your account?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Support
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Student FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
