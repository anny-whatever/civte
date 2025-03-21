// src/components/pages/GetResult.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetResult = () => {
  // State for form data
  const [formData, setFormData] = useState({
    rollNumber: "",
    dob: "",
  });

  // State for result data
  const [resultData, setResultData] = useState({
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
    const isValid = formData.rollNumber.toUpperCase() === "R12345";

    if (isValid) {
      setResultData({
        submitted: true,
        isValid: true,
        message: "Result found!",
        details: {
          rollNumber: formData.rollNumber.toUpperCase(),
          name: "John Doe",
          fatherName: "Robert Doe",
          course: "Diploma in Computer Application",
          examDate: "15-03-2024",
          semester: "2nd Semester",
          results: [
            {
              subject: "Computer Fundamentals",
              maxMarks: 100,
              obtainedMarks: 85,
              grade: "A",
            },
            {
              subject: "Programming with C",
              maxMarks: 100,
              obtainedMarks: 78,
              grade: "B",
            },
            {
              subject: "Data Structures",
              maxMarks: 100,
              obtainedMarks: 82,
              grade: "A",
            },
            {
              subject: "Database Management",
              maxMarks: 100,
              obtainedMarks: 90,
              grade: "A+",
            },
            {
              subject: "Computer Networks",
              maxMarks: 100,
              obtainedMarks: 75,
              grade: "B",
            },
          ],
          totalMarks: 500,
          obtainedTotal: 410,
          percentage: 82,
          result: "PASS",
          grade: "A",
          remarks: "Excellent",
        },
      });
    } else {
      setResultData({
        submitted: true,
        isValid: false,
        message:
          "Invalid roll number or date of birth. Please check your details and try again.",
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
            Examination Results
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Check and download your examination results by entering your roll
            number and date of birth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Result Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          >
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
              <h2 className="text-white font-bold text-xl">Download Result</h2>
              <p className="text-white/80 mt-2">
                Enter your roll number and date of birth to check your result.
              </p>
            </div>

            <div className="p-6">
              {!resultData.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="rollNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Roll Number <span className="text-[#EC0729]">*</span>
                      </label>
                      <input
                        type="text"
                        id="rollNumber"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter your roll number"
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
                      Get Result
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div
                    className={`p-4 mb-6 rounded-md ${
                      resultData.isValid ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 ${
                          resultData.isValid ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {resultData.isValid ? (
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
                            resultData.isValid
                              ? "text-green-800"
                              : "text-red-800"
                          }`}
                        >
                          {resultData.isValid
                            ? "Result Found"
                            : "Result Not Found"}
                        </h3>
                        <div
                          className={`mt-2 text-sm ${
                            resultData.isValid
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          <p>{resultData.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <button
                      onClick={() => {
                        setFormData({ rollNumber: "", dob: "" });
                        setResultData({
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

                    {resultData.isValid && (
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
                        Download Result PDF
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
                    For demo purposes, use <strong>R12345</strong> as a valid
                    Roll Number. Any other roll number will show as invalid.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Result Display */}
          {resultData.isValid && resultData.details && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                <h2 className="text-white font-bold text-xl">Result Card</h2>
                <p className="text-white/80 mt-2">
                  {resultData.details.course} - {resultData.details.semester}
                </p>
              </div>

              <div className="p-6">
                {/* Student Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Roll Number</p>
                    <p className="font-medium">
                      {resultData.details.rollNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Student Name</p>
                    <p className="font-medium">{resultData.details.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Father's Name</p>
                    <p className="font-medium">
                      {resultData.details.fatherName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course</p>
                    <p className="font-medium">{resultData.details.course}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Semester</p>
                    <p className="font-medium">{resultData.details.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Exam Date</p>
                    <p className="font-medium">{resultData.details.examDate}</p>
                  </div>
                </div>

                {/* Subject Marks */}
                <div className="mb-6 overflow-x-auto">
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
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Max Marks
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Obtained Marks
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {resultData.details.results.map((subject, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {subject.subject}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {subject.maxMarks}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                            {subject.obtainedMarks}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                subject.grade === "A+"
                                  ? "bg-green-100 text-green-800"
                                  : subject.grade === "A"
                                  ? "bg-green-100 text-green-800"
                                  : subject.grade === "B"
                                  ? "bg-blue-100 text-blue-800"
                                  : subject.grade === "C"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : subject.grade === "D"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {subject.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Result Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Total Marks</p>
                    <p className="font-medium">
                      {resultData.details.totalMarks}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Marks Obtained</p>
                    <p className="font-medium">
                      {resultData.details.obtainedTotal}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Percentage</p>
                    <p className="font-medium">
                      {resultData.details.percentage}%
                    </p>
                  </div>
                </div>

                {/* Final Result */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4">
                      <p className="text-sm text-gray-500">Result</p>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          resultData.details.result === "PASS"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {resultData.details.result}
                      </span>
                    </div>
                    <div className="mr-4">
                      <p className="text-sm text-gray-500">Grade</p>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          resultData.details.grade === "A+"
                            ? "bg-green-100 text-green-800"
                            : resultData.details.grade === "A"
                            ? "bg-green-100 text-green-800"
                            : resultData.details.grade === "B"
                            ? "bg-blue-100 text-blue-800"
                            : resultData.details.grade === "C"
                            ? "bg-yellow-100 text-yellow-800"
                            : resultData.details.grade === "D"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {resultData.details.grade}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Remarks</p>
                      <p className="font-medium">
                        {resultData.details.remarks}
                      </p>
                    </div>
                  </div>

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
                    Print Result
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
                      This is a computer-generated result and does not require
                      any signature. For any discrepancies in the result, please
                      contact your study center or CIVTE's examination
                      department.
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
        </div>
      </div>
    </div>
  );
};

export default GetResult;
