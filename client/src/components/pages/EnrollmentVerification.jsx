// src/components/pages/EnrollmentVerification.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EnrollmentVerification = () => {
  // State for form data
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    dob: "",
  });

  // State for verification result
  const [verificationResult, setVerificationResult] = useState({
    submitted: false,
    isValid: false,
    message: "",
    details: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate verification process (would connect to backend in production)
    // For demo, let's use a dummy verification logic
    const isValid = formData.enrollmentNumber.toUpperCase() === "CIVTE12345";

    if (isValid) {
      setVerificationResult({
        submitted: true,
        isValid: true,
        message: "Enrollment verification successful!",
        details: {
          enrollmentNumber: formData.enrollmentNumber.toUpperCase(),
          name: "John Doe",
          fatherName: "Robert Doe",
          course: "Diploma in Computer Application",
          batch: "January 2024",
          status: "Active",
          centerName: "ABC Computer Education Center",
          centerLocation: "Pune, Maharashtra",
        },
      });
    } else {
      setVerificationResult({
        submitted: true,
        isValid: false,
        message:
          "Invalid enrollment number or date of birth. Please check your details and try again.",
        details: null,
      });
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
            Enrollment Verification
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Verify your enrollment status by entering your enrollment number and
            date of birth.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
            <h2 className="text-white font-bold text-xl">
              Student Enrollment Verification
            </h2>
            <p className="text-white/80 mt-2">
              Enter your enrollment number and date of birth to verify your
              enrollment status.
            </p>
          </div>

          <div className="p-6">
            {!verificationResult.submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="enrollmentNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Enrollment Number <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="enrollmentNumber"
                    name="enrollmentNumber"
                    value={formData.enrollmentNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter your enrollment number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    max={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                  >
                    Verify Enrollment
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div
                  className={`p-4 mb-6 rounded-md ${
                    verificationResult.isValid ? "bg-green-100" : "bg-red-100"
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

                {verificationResult.isValid && verificationResult.details && (
                  <div className="bg-gray-50 p-6 rounded-md mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Student Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          Enrollment Number
                        </p>
                        <p className="font-medium">
                          {verificationResult.details.enrollmentNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Student Name</p>
                        <p className="font-medium">
                          {verificationResult.details.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Father's Name</p>
                        <p className="font-medium">
                          {verificationResult.details.fatherName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Course</p>
                        <p className="font-medium">
                          {verificationResult.details.course}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Batch</p>
                        <p className="font-medium">
                          {verificationResult.details.batch}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {verificationResult.details.status}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Study Center</p>
                        <p className="font-medium">
                          {verificationResult.details.centerName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Center Location</p>
                        <p className="font-medium">
                          {verificationResult.details.centerLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      setFormData({ enrollmentNumber: "", dob: "" });
                      setVerificationResult({
                        submitted: false,
                        isValid: false,
                        message: "",
                        details: null,
                      });
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors inline-block"
                  >
                    Verify Another Enrollment
                  </button>

                  {verificationResult.isValid && (
                    <Link
                      to="/student-login"
                      className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-block"
                    >
                      Go to Student Login
                    </Link>
                  )}
                </div>
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
                  For demo purposes, use <strong>CIVTE12345</strong> as a valid
                  Enrollment Number. Any other number will show as invalid.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Other Student Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/get-result"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Get Result
                </h4>
              </div>
              <p className="text-gray-600">
                Check and download your examination results.
              </p>
            </Link>

            <Link
              to="/get-certificate"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Get Certificate
                </h4>
              </div>
              <p className="text-gray-600">
                View and download your course completion certificate.
              </p>
            </Link>

            <Link
              to="/get-admit-card"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
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
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Get Admit Card
                </h4>
              </div>
              <p className="text-gray-600">
                Download your examination admit card.
              </p>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200 p-4">
              <button className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900">
                  What is an enrollment number?
                </span>
                <svg
                  className="h-5 w-5 text-gray-500"
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
              <div className="mt-2">
                <p className="text-gray-600">
                  An enrollment number is a unique identifier assigned to each
                  student upon admission to CIVTE. It is used to track your
                  academic progress, results, and certificates throughout your
                  course duration.
                </p>
              </div>
            </div>

            <div className="border-b border-gray-200 p-4">
              <button className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900">
                  I've lost my enrollment number. How can I retrieve it?
                </span>
                <svg
                  className="h-5 w-5 text-gray-500"
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
              <div className="mt-2">
                <p className="text-gray-600">
                  If you've lost your enrollment number, you can contact your
                  study center or reach out to our support team with your
                  personal details (name, date of birth, course, and admission
                  date) to retrieve it. You can also check your admission
                  confirmation email if available.
                </p>
              </div>
            </div>

            <div className="border-b border-gray-200 p-4">
              <button className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900">
                  Why is my enrollment showing as invalid?
                </span>
                <svg
                  className="h-5 w-5 text-gray-500"
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
              <div className="mt-2">
                <p className="text-gray-600">
                  Your enrollment might show as invalid if you've entered an
                  incorrect enrollment number or date of birth. It could also be
                  due to pending fee payments, incomplete admission process, or
                  if the course duration has expired. Please double-check your
                  details or contact our support for assistance.
                </p>
              </div>
            </div>

            <div className="p-4">
              <button className="flex justify-between items-center w-full text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900">
                  Can I use this verification for official purposes?
                </span>
                <svg
                  className="h-5 w-5 text-gray-500"
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
              <div className="mt-2">
                <p className="text-gray-600">
                  Yes, the enrollment verification can be used for official
                  purposes as it confirms your current status with CIVTE.
                  However, for more comprehensive documentation, you may need to
                  request an official verification letter from your study center
                  or CIVTE's administrative office.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollmentVerification;
