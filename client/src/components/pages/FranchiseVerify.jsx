// src/components/pages/FranchiseVerify.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FranchiseVerify = () => {
  // State for franchise verification form
  const [verifyData, setVerifyData] = useState({
    franchiseId: "",
    contactNumber: "",
  });

  // State for search study center form
  const [searchData, setSearchData] = useState({
    state: "",
    city: "",
  });

  // State for search results
  const [searchResults, setSearchResults] = useState([]);

  // State for verification result
  const [verificationResult, setVerificationResult] = useState({
    submitted: false,
    isValid: false,
    message: "",
    details: null,
  });

  // State for active tab
  const [activeTab, setActiveTab] = useState("verify");

  // Handle input change for franchise verification form
  const handleVerifyChange = (e) => {
    const { name, value } = e.target;
    setVerifyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle input change for search study center form
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle franchise verification form submission
  const handleVerifySubmit = (e) => {
    e.preventDefault();

    // Simulate verification process (would connect to backend in production)
    // For demo, let's use a dummy verification logic
    const isValid = verifyData.franchiseId.toUpperCase() === "F12345";

    if (isValid) {
      setVerificationResult({
        submitted: true,
        isValid: true,
        message: "Franchise verified successfully!",
        details: {
          id: verifyData.franchiseId.toUpperCase(),
          name: "ABC Computer Education Center",
          owner: "John Doe",
          address: "123 Main Street, Pune, Maharashtra",
          contact: "+91 9876543210",
          registrationDate: "12/05/2022",
          status: "Active",
        },
      });
    } else {
      setVerificationResult({
        submitted: true,
        isValid: false,
        message:
          "Invalid franchise ID or contact number. Please check your details and try again.",
        details: null,
      });
    }
  };

  // Handle search study center form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Simulate search process (would connect to backend in production)
    // For demo, let's use dummy search results
    if (searchData.state) {
      // Generate dummy results based on selected state
      const dummyResults = [
        {
          id: "F12345",
          name: "ABC Computer Education Center",
          address:
            "123 Main Street, " + searchData.city + ", " + searchData.state,
          contact: "+91 9876543210",
        },
        {
          id: "F67890",
          name: "XYZ Technical Institute",
          address:
            "456 Park Avenue, " + searchData.city + ", " + searchData.state,
          contact: "+91 9876543211",
        },
        {
          id: "F54321",
          name: "PQR Vocational Training Center",
          address:
            "789 Gandhi Road, " + searchData.city + ", " + searchData.state,
          contact: "+91 9876543212",
        },
      ];

      setSearchResults(dummyResults);
    } else {
      setSearchResults([]);
    }
  };

  // List of states for dropdown
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Generate cities based on selected state (dummy data for demo)
  const getCities = (state) => {
    const cityMap = {
      Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
      Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belgaum"],
      "Tamil Nadu": [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Tiruchirappalli",
        "Salem",
      ],
      Delhi: [
        "New Delhi",
        "North Delhi",
        "South Delhi",
        "East Delhi",
        "West Delhi",
      ],
      // Default cities for other states
      default: ["City 1", "City 2", "City 3", "City 4", "City 5"],
    };

    return cityMap[state] || cityMap["default"];
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
            CIVTE Services Portal
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Verify franchises, find study centers, check enrollment status,
            download results, certificates, and admit cards.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Franchise Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-4">
              <h2 className="text-white font-bold text-xl">
                Franchise Services
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <Link
                to="/franchisee-form"
                className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Apply for Franchise
              </Link>
              <button
                onClick={() => setActiveTab("verify")}
                className={`flex items-center ${
                  activeTab === "verify"
                    ? "text-[#EC0729]"
                    : "text-gray-700 hover:text-[#EC0729]"
                } transition-colors w-full text-left`}
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Verify Franchise
              </button>
              <button
                onClick={() => setActiveTab("centers")}
                className={`flex items-center ${
                  activeTab === "centers"
                    ? "text-[#EC0729]"
                    : "text-gray-700 hover:text-[#EC0729]"
                } transition-colors w-full text-left`}
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Find Study Centers
              </button>
              <Link
                to="/center-login"
                className="flex items-center text-gray-700 hover:text-[#EC0729] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Center Login
              </Link>
            </div>
          </motion.div>

          {/* Student Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
              <h2 className="text-white font-bold text-xl">Student Services</h2>
            </div>
            <div className="p-6 space-y-4">
              <Link
                to="/student-form"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Online Admission
              </Link>
              <Link
                to="/enrollment-verification"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Verify Enrollment
              </Link>
              <Link
                to="/get-result"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Get Result
              </Link>
              <Link
                to="/get-certificate"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Get Certificate
              </Link>
            </div>
          </motion.div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
              <h2 className="text-white font-bold text-xl">Other Services</h2>
            </div>
            <div className="p-6 space-y-4">
              <Link
                to="/get-admit-card"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Download Admit Card
              </Link>
              <Link
                to="/student-login"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Student Login
              </Link>
              <Link
                to="/courses"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Browse Courses
              </Link>
              <Link
                to="/contact-us"
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
            </div>
          </motion.div>
        </div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Franchise Verification Tab */}
          {activeTab === "verify" && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#EC0729] p-6">
                <h2 className="text-white font-bold text-xl">
                  Franchise Verification
                </h2>
                <p className="text-white/80 mt-2">
                  Verify the authenticity of a CIVTE franchise center by
                  entering the Franchise ID and contact number.
                </p>
              </div>

              <div className="p-6">
                {!verificationResult.submitted ? (
                  <form onSubmit={handleVerifySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="franchiseId"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Franchise ID <span className="text-[#EC0729]">*</span>
                        </label>
                        <input
                          type="text"
                          id="franchiseId"
                          name="franchiseId"
                          value={verifyData.franchiseId}
                          onChange={handleVerifyChange}
                          required
                          placeholder="Enter Franchise ID (e.g. F12345)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contactNumber"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Contact Number{" "}
                          <span className="text-[#EC0729]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          value={verifyData.contactNumber}
                          onChange={handleVerifyChange}
                          required
                          placeholder="Enter Contact Number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                      >
                        Verify Franchise
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <div
                      className={`p-4 mb-6 rounded-md ${
                        verificationResult.isValid
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`flex-shrink-0 ${
                            verificationResult.isValid
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {verificationResult.isValid ? (
                            <svg
                              className="h-6 w-6"
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
                              className="h-6 w-6"
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
                          <h3
                            className={`text-lg font-medium ${
                              verificationResult.isValid
                                ? "text-green-800"
                                : "text-red-800"
                            }`}
                          >
                            {verificationResult.isValid
                              ? "Verification Successful"
                              : "Verification Failed"}
                          </h3>
                          <div
                            className={`mt-2 text-sm ${
                              verificationResult.isValid
                                ? "text-green-700"
                                : "text-red-700"
                            }`}
                          >
                            <p>{verificationResult.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {verificationResult.isValid &&
                      verificationResult.details && (
                        <div className="bg-gray-50 p-6 rounded-md mb-6">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Franchise Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                Franchise ID
                              </p>
                              <p className="font-medium">
                                {verificationResult.details.id}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Franchise Name
                              </p>
                              <p className="font-medium">
                                {verificationResult.details.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Owner Name
                              </p>
                              <p className="font-medium">
                                {verificationResult.details.owner}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Contact Number
                              </p>
                              <p className="font-medium">
                                {verificationResult.details.contact}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Address</p>
                              <p className="font-medium">
                                {verificationResult.details.address}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Registration Date
                              </p>
                              <p className="font-medium">
                                {verificationResult.details.registrationDate}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Status</p>
                              <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {verificationResult.details.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    <button
                      onClick={() => {
                        setVerifyData({ franchiseId: "", contactNumber: "" });
                        setVerificationResult({
                          submitted: false,
                          isValid: false,
                          message: "",
                          details: null,
                        });
                      }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors inline-block"
                    >
                      Verify Another Franchise
                    </button>
                  </div>
                )}
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
                      For demo purposes, use <strong>F12345</strong> as a valid
                      Franchise ID. Any other ID will show as invalid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Find Study Centers Tab */}
          {activeTab === "centers" && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#EC0729] p-6">
                <h2 className="text-white font-bold text-xl">
                  Find Study Centers
                </h2>
                <p className="text-white/80 mt-2">
                  Search for CIVTE study centers in your area by selecting your
                  state and city.
                </p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSearchSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State <span className="text-[#EC0729]">*</span>
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={searchData.state}
                        onChange={handleSearchChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={searchData.city}
                        onChange={handleSearchChange}
                        disabled={!searchData.state}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729] disabled:bg-gray-100 disabled:text-gray-500"
                      >
                        <option value="">All Cities</option>
                        {searchData.state &&
                          getCities(searchData.state).map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                      {!searchData.state && (
                        <p className="mt-1 text-sm text-gray-500">
                          Please select a state first
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                    >
                      Search Centers
                    </button>
                  </div>
                </form>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Search Results ({searchResults.length} centers found)
                    </h3>

                    <div className="space-y-4">
                      {searchResults.map((center) => (
                        <div
                          key={center.id}
                          className="bg-gray-50 p-4 rounded-md border border-gray-200"
                        >
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-gray-900">
                                {center.name}
                              </h4>
                              <p className="text-gray-600 mt-1">
                                {center.address}
                              </p>
                              <p className="text-gray-600 mt-1">
                                <span className="font-medium">Contact:</span>{" "}
                                {center.contact}
                              </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Verified
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {searchData.state && searchResults.length === 0 && (
                  <div className="mt-8 text-center py-10">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
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
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                      No centers found
                    </h3>
                    <p className="mt-1 text-gray-500">
                      There are no CIVTE study centers in the selected location.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Help Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#EC0729]"
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
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+91 9306956308</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#EC0729]"
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
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@civte.in</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-[#EC0729]"
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
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600">+91 9306956308</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  to="/contact-us"
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseVerify;
