// src/components/pages/GetCertificate.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImage from "../../assets/images/logo.png";
import signature from "../../assets/images/signature.png";
import qr from "../../assets/images/qr.png";

const GetCertificate = () => {
  // State for form data
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    dob: "",
  });

  // State for certificate data
  const [certificateData, setCertificateData] = useState({
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
      setCertificateData({
        submitted: true,
        isValid: true,
        message: "Certificate found!",
        details: {
          enrollmentNumber: formData.enrollmentNumber.toUpperCase(),
          name: "John Doe",
          fatherName: "Robert Doe",
          course: "Diploma in Computer Application",
          duration: "July 2023 - June 2024",
          completionDate: "30-06-2024",
          certificateNumber: "CIVTE/DCA/2024/1234",
          grade: "A",
          verificationQR: qr,
          logo: logoImage,
          signature: signature,
        },
      });
    } else {
      setCertificateData({
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
            Certificate Verification
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Check and download your course completion certificate by entering
            your enrollment number and date of birth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Certificate Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          >
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
              <h2 className="text-white font-bold text-xl">
                Certificate Verification
              </h2>
              <p className="text-white/80 mt-2">
                Enter your enrollment number and date of birth to verify and
                download your certificate.
              </p>
            </div>

            <div className="p-6">
              {!certificateData.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="enrollmentNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Enrollment Number{" "}
                        <span className="text-[#EC0729]">*</span>
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
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                    >
                      Verify Certificate
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      certificateData.isValid ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 ${
                          certificateData.isValid
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {certificateData.isValid ? (
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
                            certificateData.isValid
                              ? "text-green-800"
                              : "text-red-800"
                          }`}
                        >
                          {certificateData.isValid
                            ? "Certificate Found"
                            : "Certificate Not Found"}
                        </h3>
                        <div
                          className={`mt-2 text-sm ${
                            certificateData.isValid
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          <p>{certificateData.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <button
                      onClick={() => {
                        setFormData({ enrollmentNumber: "", dob: "" });
                        setCertificateData({
                          submitted: false,
                          isValid: false,
                          message: "",
                          details: null,
                        });
                      }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors inline-block mr-4"
                    >
                      Search Again
                    </button>

                    {certificateData.isValid && (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center">
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
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download Certificate
                      </button>
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
                    For demo purposes, use <strong>CIVTE12345</strong> as a
                    valid Enrollment Number. Any other enrollment number will
                    show as invalid.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificate Display */}
          {certificateData.isValid && certificateData.details && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
            >
              <div className="bg-[#FEE900] p-6">
                <h2 className="text-gray-900 font-bold text-xl">
                  Certificate Preview
                </h2>
              </div>

              <div className="p-6">
                {/* Certificate Layout */}
                <div className="border-8 border-double border-gray-300 p-8 bg-white">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <img
                        src={certificateData.details.logo}
                        alt="CIVTE Logo"
                        className="h-16"
                      />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 uppercase mb-2">
                      Central Institute of Vocational & Technical Education
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Approved by Ministry of Education, Government of India
                    </p>

                    <div className="w-32 h-1 bg-[#EC0729] mx-auto mb-6"></div>

                    <h1 className="text-3xl font-bold text-[#EC0729] uppercase mb-6">
                      Certificate of Completion
                    </h1>

                    <p className="text-lg text-gray-800 mb-6">
                      This is to certify that
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {certificateData.details.name}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      S/O {certificateData.details.fatherName}
                    </p>

                    <p className="text-lg text-gray-800 mb-2">
                      has successfully completed the course
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {certificateData.details.course}
                    </h3>

                    <p className="text-gray-700 mb-6">
                      during the period{" "}
                      <span className="font-semibold">
                        {certificateData.details.duration}
                      </span>{" "}
                      with grade{" "}
                      <span className="font-semibold">
                        {certificateData.details.grade}
                      </span>
                    </p>

                    <div className="flex justify-between items-end mt-12">
                      <div className="text-left">
                        <p className="text-sm text-gray-600 mb-1">
                          Date of Issue
                        </p>
                        <p className="font-medium">
                          {certificateData.details.completionDate}
                        </p>
                      </div>

                      <div className="text-center">
                        <img
                          src={certificateData.details.signature}
                          alt="Signature"
                          className="h-12 mx-auto mb-1"
                        />
                        <div className="w-40 h-px bg-gray-400 mb-1"></div>
                        <p className="text-sm text-gray-600">Director, CIVTE</p>
                      </div>

                      <div className="text-right">
                        <img
                          src={certificateData.details.verificationQR}
                          alt="QR Code"
                          className="h-16"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Scan to verify
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Certificate Number:{" "}
                        <span className="font-medium">
                          {certificateData.details.certificateNumber}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        Verify this certificate at:{" "}
                        <span className="text-blue-600">
                          https://civte.in/verify
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <div className="mt-6 text-center">
                  <button className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center mx-auto">
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Certificate
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-gray-500">
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
                    <p className="text-sm text-gray-600">
                      This is a digitally generated certificate. To verify the
                      authenticity of this certificate, please scan the QR code
                      or visit{" "}
                      <span className="text-blue-600">
                        https://civte.in/verify
                      </span>{" "}
                      and enter the certificate number.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <Link
              to="/enrollment-verification"
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
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Enrollment Verification
                </h4>
              </div>
              <p className="text-gray-600">
                Verify your enrollment status with CIVTE.
              </p>
            </Link>

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
              to="/get-admit-card"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
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
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h3>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    When will I receive my certificate?
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
                    Certificates are typically issued within 30 days after the
                    successful completion of your course and all required
                    assessments. You will receive a notification via email once
                    your certificate is ready for download.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    How can I verify the authenticity of my certificate?
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
                    Every certificate issued by CIVTE has a unique certificate
                    number and QR code. You can verify the authenticity of your
                    certificate by scanning the QR code or by visiting our
                    website and entering the certificate number in the
                    verification portal.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    My certificate shows incorrect information. What should I
                    do?
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
                    If you notice any incorrect information on your certificate,
                    please contact your study center or CIVTE's support team
                    immediately. Provide them with your enrollment number,
                    certificate number, and the details that need correction. We
                    will verify the information and issue a corrected
                    certificate if necessary.
                  </p>
                </div>
              </div>

              <div className="p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    I've lost my digital certificate. How can I get another
                    copy?
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
                    You can download your digital certificate again at any time
                    by visiting this page and entering your enrollment number
                    and date of birth. If you're still facing issues, please
                    contact our support team for assistance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetCertificate;
