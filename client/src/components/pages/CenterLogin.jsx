// src/components/pages/CenterLogin.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CenterLogin = () => {
  // State for form data
  const [formData, setFormData] = useState({
    centerCode: "",
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
    // For demo, let's use a dummy center code and password
    const isValid =
      formData.centerCode === "center123" && formData.password === "password";

    setFormStatus({
      submitted: true,
      success: isValid,
      message: isValid
        ? "Login successful! Redirecting to center dashboard..."
        : "Invalid center code or password. Please try again.",
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
            Study Center Login
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Access your study center's dashboard to manage students, courses,
            examinations, and more.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
                <h2 className="text-white font-bold text-xl">
                  Study Center Portal Login
                </h2>
                <p className="text-white/80 mt-2">
                  Enter your credentials to access your center's dashboard.
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
                            formStatus.success
                              ? "text-green-800"
                              : "text-red-800"
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
                      htmlFor="centerCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Center Code <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="centerCode"
                      name="centerCode"
                      value={formData.centerCode}
                      onChange={handleChange}
                      required
                      placeholder="Enter your center code"
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
                    Don't have a center account?{" "}
                    <Link
                      to="/franchisee-form"
                      className="text-[#EC0729] hover:underline font-medium"
                    >
                      Apply for a Franchise
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
                      For demo purposes, use <strong>center123</strong> as
                      Center Code and <strong>password</strong> as password.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              {/* Help Box */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="bg-blue-600 p-4">
                  <h3 className="text-white font-bold">Need Help?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Having trouble logging in? Contact our support team for
                    assistance.
                  </p>
                  <div className="flex items-center mb-3">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      +91 9306956308
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
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
                    <span className="text-sm text-gray-700">
                      center-support@civte.in
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      WhatsApp: +91 9306956308
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#FEE900] p-4">
                  <h3 className="text-gray-900 font-bold">Quick Links</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/franchisee-form"
                        className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-[#EC0729]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span className="text-sm">Apply for Franchise</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/franchise-verify"
                        className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-[#EC0729]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <span className="text-sm">Verify Franchise</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/list-center"
                        className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-[#EC0729]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm">Find Study Centers</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student-login"
                        className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-[#EC0729]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span className="text-sm">Student Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/courses"
                        className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2 text-[#EC0729]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="text-sm">View Courses</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Study Center Dashboard Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Student Management
                </h4>
                <p className="text-gray-600 text-sm">
                  Register new students, manage profiles, and track enrollment
                  status.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Exam Management
                </h4>
                <p className="text-gray-600 text-sm">
                  Schedule exams, generate admit cards, and manage results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Course Management
                </h4>
                <p className="text-gray-600 text-sm">
                  Access course materials, manage batches, and track progress.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Reports & Analytics
                </h4>
                <p className="text-gray-600 text-sm">
                  Generate reports, track performance, and analyze metrics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CenterLogin;
