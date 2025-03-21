// src/components/pages/GetAdmitCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetAdmitCard = () => {
  // State for form data
  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    dob: "",
  });

  // State for admit card data
  const [admitCardData, setAdmitCardData] = useState({
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
      setAdmitCardData({
        submitted: true,
        isValid: true,
        message: "Admit Card found!",
        details: {
          enrollmentNumber: formData.enrollmentNumber.toUpperCase(),
          name: "John Doe",
          fatherName: "Robert Doe",
          course: "Diploma in Computer Application",
          examName: "Semester End Examination",
          centerName: "ABC Computer Education Center",
          centerAddress: "123 Main Street, Pune, Maharashtra 411058",
          examDate: "15-04-2025",
          reportingTime: "09:30 AM",
          examTime: "10:00 AM - 01:00 PM",
          photo: "https://via.placeholder.com/150",
          subjects: [
            {
              name: "Computer Fundamentals",
              date: "15-04-2025",
              time: "10:00 AM - 01:00 PM",
            },
            {
              name: "Programming with C",
              date: "17-04-2025",
              time: "10:00 AM - 01:00 PM",
            },
            {
              name: "Data Structures",
              date: "19-04-2025",
              time: "10:00 AM - 01:00 PM",
            },
            {
              name: "Database Management",
              date: "21-04-2025",
              time: "10:00 AM - 01:00 PM",
            },
            {
              name: "Computer Networks",
              date: "23-04-2025",
              time: "10:00 AM - 01:00 PM",
            },
          ],
        },
      });
    } else {
      setAdmitCardData({
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
            Admit Card Download
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Download your examination admit card by entering your enrollment
            number and date of birth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Admit Card Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          >
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
              <h2 className="text-white font-bold text-xl">Admit Card Home</h2>
              <p className="text-white/80 mt-2">
                Enter your enrollment number and date of birth to download your
                admit card.
              </p>
            </div>

            <div className="p-6">
              {!admitCardData.submitted ? (
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
                      Download Admit Card
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      admitCardData.isValid ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 ${
                          admitCardData.isValid
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {admitCardData.isValid ? (
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
                            admitCardData.isValid
                              ? "text-green-800"
                              : "text-red-800"
                          }`}
                        >
                          {admitCardData.isValid
                            ? "Admit Card Found"
                            : "Admit Card Not Found"}
                        </h3>
                        <div
                          className={`mt-2 text-sm ${
                            admitCardData.isValid
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          <p>{admitCardData.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <button
                      onClick={() => {
                        setFormData({ enrollmentNumber: "", dob: "" });
                        setAdmitCardData({
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

                    {admitCardData.isValid && (
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
                        Download Admit Card PDF
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

          {/* Admit Card Display */}
          {admitCardData.isValid && admitCardData.details && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
            >
              <div className="bg-gray-900 p-6 text-white">
                <h2 className="font-bold text-xl text-center">
                  Examination Admit Card
                </h2>
              </div>

              <div className="p-6">
                {/* Admit Card Layout */}
                <div className="border-4 border-double border-gray-300 p-8 bg-white">
                  <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
                    <img
                      src="https://via.placeholder.com/80"
                      alt="CIVTE Logo"
                      className="h-16"
                    />
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-gray-900">
                        Central Institute of Vocational & Technical Education
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Approved by Ministry of Education, Government of India
                      </p>
                      <h3 className="text-lg font-bold text-[#EC0729] mt-2">
                        {admitCardData.details.examName}
                      </h3>
                    </div>
                    <div className="w-[100px] h-[120px] border border-gray-300 flex items-center justify-center">
                      <img
                        src={admitCardData.details.photo}
                        alt="Student Photo"
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Enrollment Number</p>
                      <p className="font-medium">
                        {admitCardData.details.enrollmentNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Student Name</p>
                      <p className="font-medium">
                        {admitCardData.details.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Father's Name</p>
                      <p className="font-medium">
                        {admitCardData.details.fatherName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Course</p>
                      <p className="font-medium">
                        {admitCardData.details.course}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Examination Center
                      </p>
                      <p className="font-medium">
                        {admitCardData.details.centerName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Center Address</p>
                      <p className="font-medium">
                        {admitCardData.details.centerAddress}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Reporting Time</p>
                      <p className="font-medium">
                        {admitCardData.details.reportingTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Exam Date</p>
                      <p className="font-medium">
                        {admitCardData.details.examDate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Examination Schedule
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Subject
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {admitCardData.details.subjects.map(
                            (subject, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {subject.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {subject.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {subject.time}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div>
                      <img
                        src="https://via.placeholder.com/200x50"
                        alt="Controller of Examination Signature"
                        className="h-10"
                      />
                      <div className="w-40 h-px bg-gray-400 mb-1 mt-2"></div>
                      <p className="text-sm text-gray-600">
                        Controller of Examination
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mt-6">
                        Student Signature
                      </p>
                      <div className="w-40 h-px bg-gray-400 mb-1 mt-2 ml-auto"></div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Important Instructions:
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                      <li>
                        Students must carry this admit card to the examination
                        center.
                      </li>
                      <li>
                        Students should reach the examination center at least 30
                        minutes before the reporting time.
                      </li>
                      <li>
                        No electronic devices (mobile phones, calculators, etc.)
                        are allowed in the examination hall unless specified.
                      </li>
                      <li>
                        Students must carry a valid photo ID proof along with
                        the admit card.
                      </li>
                      <li>
                        Students must follow all the instructions given by the
                        invigilator during the examination.
                      </li>
                      <li>
                        Any kind of malpractice will lead to disqualification
                        from the examination.
                      </li>
                    </ol>
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
                    Download Admit Card
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
                      This is a digitally generated admit card. Please print it
                      on A4 size paper and bring it to the examination center.
                      The admit card is an important document and must be
                      preserved till the completion of the course.
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
                    When will my admit card be available?
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
                    Admit cards are typically available 10-15 days before the
                    scheduled examination date. You will receive a notification
                    via email or SMS once your admit card is ready for download.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    What if I am unable to download my admit card?
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
                    If you are unable to download your admit card or face any
                    technical issues, please contact your study center or
                    CIVTE's examination department at least 3 days before the
                    examination date. They will assist you in resolving the
                    issue or provide you with an alternative method to obtain
                    your admit card.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    What if there is an error in my admit card?
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
                    If you notice any discrepancy or error in your admit card
                    (such as incorrect name, enrollment number, course details,
                    etc.), please contact your study center or CIVTE's
                    examination department immediately. They will verify the
                    information and issue a corrected admit card if necessary.
                    It's important to report such issues well before the
                    examination date.
                  </p>
                </div>
              </div>

              <div className="p-4">
                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                  <span className="text-lg font-medium text-gray-900">
                    What documents should I carry to the examination?
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
                    You must carry the printed admit card and a valid photo ID
                    proof (such as Aadhar Card, PAN Card, Voter ID, Driving
                    License, etc.) to the examination center. Additionally, you
                    should carry any other documents or materials specified in
                    the admit card or as instructed by your study center.
                    Electronic devices like mobile phones and calculators are
                    generally not allowed unless specified otherwise for certain
                    examinations.
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

export default GetAdmitCard;
