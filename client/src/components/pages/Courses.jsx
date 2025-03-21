// src/components/pages/Courses.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Course category data
const categoryData = [
  {
    id: "vocational-courses",
    name: "Vocational Courses",
    courses: [
      { name: "C.C. BEAUTY THERAPIST", duration: "6 MONTHS" },
      { name: "DIPLOMA IN BEAUTY THERAPIST", duration: "1 YEAR" },
      { name: "C.C FASHION DESIGNER", duration: "6 MONTHS" },
      { name: "DIPLOMA IN FASHION DESIGNER", duration: "1 YEAR" },
      { name: "C.C HAIR STYLIST", duration: "3 MONTH" },
      { name: "C.C ASSISTANT SPA THERAPIST", duration: "3 MONTH" },
      { name: "C.C FOOD PROCESSING", duration: "1 YEAR" },
      { name: "C.C PLUMBER", duration: "3 MONTH" },
      { name: "C.C BASIC EMBROIDERY", duration: "3 MONTH" },
      { name: "C.C SALES ASSOCIATE", duration: "3 MONTH" },
    ],
  },
  {
    id: "computer-certificate-courses",
    name: "Computer Certificate Courses",
    courses: [
      { name: "CERTIFICATE COURSE IN TALLY", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN COMPUTER APPLICATION", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN WEB DESIGNING", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN DESKTOP PUBLISHING", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN COMPUTER HARDWARE", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN MOBILE REPAIRING", duration: "3 MONTHS" },
      { name: "CERTIFICATE IN FINANCIAL ACCOUNTING", duration: "3 MONTHS" },
    ],
  },
  {
    id: "paramedical-courses",
    name: "Paramedical Courses",
    courses: [
      { name: "DIPLOMA IN MEDICAL LAB TECHNOLOGY", duration: "2 YEARS" },
      { name: "DIPLOMA IN X-RAY TECHNOLOGY", duration: "2 YEARS" },
      { name: "DIPLOMA IN OPERATION THEATER TECHNOLOGY", duration: "2 YEARS" },
      { name: "DIPLOMA IN PHYSIOTHERAPY", duration: "2 YEARS" },
      { name: "DIPLOMA IN NURSING ASSISTANT", duration: "1 YEAR" },
    ],
  },
  {
    id: "fire-safety-courses",
    name: "Fire and Industrial Safety",
    courses: [
      { name: "DIPLOMA IN FIRE & SAFETY MANAGEMENT", duration: "1 YEAR" },
      {
        name: "ADVANCED DIPLOMA IN FIRE & SAFETY MANAGEMENT",
        duration: "2 YEARS",
      },
      { name: "DIPLOMA IN INDUSTRIAL SAFETY", duration: "1 YEAR" },
    ],
  },
  {
    id: "industrial-technical-courses",
    name: "Industrial & Technical Courses",
    courses: [
      { name: "DIPLOMA IN MECHANICAL ENGINEERING", duration: "3 YEARS" },
      { name: "DIPLOMA IN ELECTRICAL ENGINEERING", duration: "3 YEARS" },
      { name: "DIPLOMA IN CIVIL ENGINEERING", duration: "3 YEARS" },
      {
        name: "DIPLOMA IN COMPUTER SCIENCE & ENGINEERING",
        duration: "3 YEARS",
      },
    ],
  },
  {
    id: "hotel-tourism-courses",
    name: "Hotel & Tourism Management",
    courses: [
      { name: "DIPLOMA IN HOTEL MANAGEMENT", duration: "1 YEAR" },
      { name: "DIPLOMA IN TOURISM MANAGEMENT", duration: "1 YEAR" },
      { name: "DIPLOMA IN FOOD & BEVERAGE SERVICES", duration: "1 YEAR" },
    ],
  },
  {
    id: "teacher-training-courses",
    name: "Teacher Training Courses",
    courses: [
      { name: "DIPLOMA IN YOGA TEACHER TRAINING", duration: "1 YEAR" },
      { name: "DIPLOMA IN COMPUTER TEACHER TRAINING", duration: "1 YEAR" },
      { name: "DIPLOMA IN NURSERY TEACHER TRAINING", duration: "1 YEAR" },
      { name: "DIPLOMA IN PHYSICAL EDUCATION", duration: "1 YEAR" },
    ],
  },
  {
    id: "computer-diploma-courses",
    name: "Computer Diploma Courses",
    courses: [
      { name: "DIPLOMA IN COMPUTER APPLICATION", duration: "1 YEAR" },
      { name: "DIPLOMA IN INFORMATION TECHNOLOGY", duration: "1 YEAR" },
      { name: "DIPLOMA IN WEB DEVELOPMENT", duration: "1 YEAR" },
      { name: "DIPLOMA IN DATA ENTRY OPERATOR", duration: "6 MONTHS" },
      { name: "DIPLOMA IN DIGITAL MARKETING", duration: "6 MONTHS" },
    ],
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredCategories, setFilteredCategories] = useState(categoryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter courses based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCategories(categoryData);
    } else {
      const filtered = categoryData
        .map((category) => {
          return {
            ...category,
            courses: category.courses.filter((course) =>
              course.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
          };
        })
        .filter((category) => category.courses.length > 0);

      setFilteredCategories(filtered);
    }
  }, [searchTerm]);

  // Filter courses based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredCategories(categoryData);
    } else {
      const filtered = categoryData.filter(
        (category) => category.id === activeTab
      );
      setFilteredCategories(filtered);
    }
  }, [activeTab]);

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
            Our Courses
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of vocational, technical, and professional
            courses designed to equip you with the skills needed for today's job
            market.
          </p>
        </motion.div>

        {/* Course Navigation Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="inline-flex space-x-2 min-w-full pb-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "all"
                  ? "bg-[#EC0729] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors whitespace-nowrap`}
            >
              All Courses
            </button>

            {categoryData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === category.id
                    ? "bg-[#EC0729] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors whitespace-nowrap`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Entries Per Page */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full md:w-64">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Courses
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
            />
          </div>

          <div className="w-full md:w-auto">
            <label
              htmlFor="entriesPerPage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Entries per page
            </label>
            <select
              id="entriesPerPage"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Course Listings */}
        <div>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gray-100 p-3 rounded-md">
                  {category.name}
                </h2>

                <div className="bg-white shadow-md rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Courses
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.courses
                        .slice(0, entriesPerPage)
                        .map((course, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {category.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {course.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {course.duration}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {category.courses.length > entriesPerPage && (
                  <div className="flex justify-center mt-4">
                    <span className="text-sm text-gray-600">
                      Showing{" "}
                      {Math.min(entriesPerPage, category.courses.length)} of{" "}
                      {category.courses.length} entries
                    </span>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10">
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No courses found
              </h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveTab("all");
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EC0729] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC0729]"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Apply Now CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#EC0729] to-red-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Enhance Your Skills?
          </h2>
          <p className="mb-6">
            Take the first step towards a successful career by enrolling in our
            government-recognized courses. Our certificates are valued in the
            job market across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/student-form"
              className="bg-white text-[#EC0729] hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors inline-block"
            >
              Apply Now
            </a>
            <a
              href="/contact-us"
              className="border-2 border-white text-white hover:bg-white hover:text-[#EC0729] font-medium py-3 px-6 rounded-md transition-colors inline-block"
            >
              Contact for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
