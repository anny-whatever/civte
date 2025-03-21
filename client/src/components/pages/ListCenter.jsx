// src/components/pages/ListCenter.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ListCenter = () => {
  // State for search filters
  const [searchFilters, setSearchFilters] = useState({
    state: "",
    city: "",
    pincode: "",
    keyword: "",
  });

  // State for search results
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // State for loading and search status
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // States and cities data
  const [states, setStates] = useState([
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
  ]);

  const [cities, setCities] = useState([]);

  // Generate cities based on selected state (dummy data for demo)
  useEffect(() => {
    if (searchFilters.state) {
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

      setCities(cityMap[searchFilters.state] || cityMap["default"]);
    } else {
      setCities([]);
    }
  }, [searchFilters.state]);

  // Dummy data for centers (would be fetched from backend in production)
  const dummyCenters = [
    {
      id: "center001",
      name: "ABC Computer Education Center",
      address: "123 Main Street, Pune",
      state: "Maharashtra",
      city: "Pune",
      pincode: "411058",
      phone: "+91 9876543210",
      email: "abc@example.com",
      courses: [
        "Diploma in Computer Application",
        "Certificate in Computer Hardware",
        "Certificate in Web Designing",
      ],
      rating: 4.5,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
    {
      id: "center002",
      name: "XYZ Technical Institute",
      address: "456 Park Avenue, Mumbai",
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "400001",
      phone: "+91 9876543211",
      email: "xyz@example.com",
      courses: [
        "Diploma in Information Technology",
        "Certificate in Mobile Repairing",
        "Diploma in Data Entry Operator",
      ],
      rating: 4.2,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
    {
      id: "center003",
      name: "PQR Vocational Training Center",
      address: "789 Gandhi Road, Bengaluru",
      state: "Karnataka",
      city: "Bengaluru",
      pincode: "560001",
      phone: "+91 9876543212",
      email: "pqr@example.com",
      courses: [
        "Diploma in Computer Teacher Training",
        "Certificate in Financial Accounting",
        "Diploma in Yoga Teacher Training",
      ],
      rating: 4.7,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
    {
      id: "center004",
      name: "Tech Academy",
      address: "101 IT Park, Chennai",
      state: "Tamil Nadu",
      city: "Chennai",
      pincode: "600001",
      phone: "+91 9876543213",
      email: "tech@example.com",
      courses: [
        "Diploma in Web Development",
        "Certificate in Digital Marketing",
        "Diploma in Computer Application",
      ],
      rating: 4.3,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
    {
      id: "center005",
      name: "Future Skills Institute",
      address: "202 MG Road, Ahmedabad",
      state: "Gujarat",
      city: "Ahmedabad",
      pincode: "380001",
      phone: "+91 9876543214",
      email: "future@example.com",
      courses: [
        "Diploma in Information Technology",
        "Certificate in Tally",
        "Diploma in Computer Teacher Training",
      ],
      rating: 4.0,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
    {
      id: "center006",
      name: "Career Point",
      address: "303 Civil Lines, Jaipur",
      state: "Rajasthan",
      city: "Jaipur",
      pincode: "302001",
      phone: "+91 9876543215",
      email: "career@example.com",
      courses: [
        "Diploma in Data Entry Operator",
        "Certificate in Computer Application",
        "Certificate in Web Designing",
      ],
      rating: 4.6,
      status: "Active",
      featuredImg: "https://via.placeholder.com/400x200",
    },
  ];

  // Handle input changes for filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setHasSearched(true);

    // Simulate API call delay
    setTimeout(() => {
      // Filter centers based on search criteria
      let results = [...dummyCenters];

      if (searchFilters.state) {
        results = results.filter(
          (center) => center.state === searchFilters.state
        );
      }

      if (searchFilters.city) {
        results = results.filter(
          (center) => center.city === searchFilters.city
        );
      }

      if (searchFilters.pincode) {
        results = results.filter((center) =>
          center.pincode.includes(searchFilters.pincode)
        );
      }

      if (searchFilters.keyword) {
        const keyword = searchFilters.keyword.toLowerCase();
        results = results.filter(
          (center) =>
            center.name.toLowerCase().includes(keyword) ||
            center.address.toLowerCase().includes(keyword) ||
            center.courses.some((course) =>
              course.toLowerCase().includes(keyword)
            )
        );
      }

      setSearchResults(results);
      setFilteredResults(results);
      setIsLoading(false);
    }, 1000);
  };

  // Reset search filters
  const handleReset = () => {
    setSearchFilters({
      state: "",
      city: "",
      pincode: "",
      keyword: "",
    });
    setCities([]);
    setSearchResults([]);
    setFilteredResults([]);
    setHasSearched(false);
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
            Find Study Centers
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Locate CIVTE authorized study centers across India. Use the search
            filters to find centers in your area.
          </p>
        </motion.div>

        {/* Search Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
            <h2 className="text-white font-bold text-xl">Find Centers</h2>
            <p className="text-white/80 mt-2">
              Use the filters below to search for CIVTE study centers in your
              area.
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={searchFilters.state}
                    onChange={handleFilterChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  >
                    <option value="">All States</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
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
                    value={searchFilters.city}
                    onChange={handleFilterChange}
                    disabled={!searchFilters.state}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729] disabled:bg-gray-100 disabled:text-gray-500"
                  >
                    <option value="">All Cities</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={searchFilters.pincode}
                    onChange={handleFilterChange}
                    placeholder="Enter pincode"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="keyword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Search by Keyword
                  </label>
                  <input
                    type="text"
                    id="keyword"
                    name="keyword"
                    value={searchFilters.keyword}
                    onChange={handleFilterChange}
                    placeholder="Center name, course, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search Centers
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Search Results */}
        <div>
          {isLoading ? (
            <div className="text-center py-16">
              <div className="animate-spin w-16 h-16 border-4 border-[#EC0729] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Searching for centers...</p>
            </div>
          ) : hasSearched ? (
            filteredResults.length > 0 ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Found {filteredResults.length} Center
                    {filteredResults.length !== 1 ? "s" : ""}
                  </h2>
                  <div className="text-sm text-gray-600">
                    <span>
                      Showing {filteredResults.length} of{" "}
                      {filteredResults.length} results
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {filteredResults.map((center, index) => (
                    <motion.div
                      key={center.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={center.featuredImg}
                          alt={center.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-[#EC0729]">
                          {center.status}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {center.name}
                        </h3>
                        <div className="mb-2 flex items-center">
                          <svg
                            className="h-5 w-5 text-yellow-500 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm text-gray-600">
                            {center.rating} Rating
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{center.address}</p>
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">State:</span>{" "}
                            {center.state}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">City:</span>{" "}
                            {center.city}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Pincode:</span>{" "}
                            {center.pincode}
                          </p>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Popular Courses:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {center.courses.slice(0, 2).map((course, i) => (
                              <span
                                key={i}
                                className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs"
                              >
                                {course}
                              </span>
                            ))}
                            {center.courses.length > 2 && (
                              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                                +{center.courses.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                          <div>
                            <a
                              href={`tel:${center.phone}`}
                              className="text-sm text-[#EC0729] hover:underline"
                            >
                              {center.phone}
                            </a>
                          </div>
                          <button className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-1 px-3 rounded-md text-sm transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
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
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No centers found
                </h3>
                <p className="mt-2 text-gray-600 max-w-md mx-auto">
                  We couldn't find any study centers matching your search
                  criteria. Try adjusting your filters or search for a different
                  location.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Reset Search
                </button>
              </div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center py-16 bg-white rounded-lg shadow-md"
            >
              <svg
                className="mx-auto h-16 w-16 text-gray-400"
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
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Find Study Centers Near You
              </h3>
              <p className="mt-2 text-gray-600 max-w-md mx-auto">
                Use the search filters above to find CIVTE authorized study
                centers in your area. You can search by state, city, pincode, or
                keywords.
              </p>
              <div className="mt-6">
                <a
                  href="#popular-centers"
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  View Popular Centers
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Popular Centers Section */}
        <motion.div
          id="popular-centers"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Study Centers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyCenters.slice(0, 3).map((center, index) => (
              <div
                key={center.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={center.featuredImg}
                    alt={center.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#FEE900] py-1 px-3 rounded-full text-xs font-semibold text-gray-900">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {center.name}
                  </h3>
                  <div className="mb-2 flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {center.rating} Rating
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{center.address}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">State:</span> {center.state}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">City:</span> {center.city}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Popular Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {center.courses.slice(0, 2).map((course, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs"
                        >
                          {course}
                        </span>
                      ))}
                      {center.courses.length > 2 && (
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs">
                          +{center.courses.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                    <div>
                      <a
                        href={`tel:${center.phone}`}
                        className="text-sm text-[#EC0729] hover:underline"
                      >
                        {center.phone}
                      </a>
                    </div>
                    <button className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-1 px-3 rounded-md text-sm transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Franchise Application CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#EC0729] to-red-700 rounded-lg p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Starting Your Own Study Center?
            </h2>
            <p className="mb-8">
              Become a part of CIVTE's nationwide network of study centers.
              Apply for a franchise today and help spread quality vocational
              education across India.
            </p>
            <Link
              to="/franchisee-form"
              className="bg-white text-[#EC0729] hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors inline-block"
            >
              Apply for Franchise
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How do I enroll at a CIVTE study center?
              </h3>
              <p className="text-gray-600">
                To enroll at a CIVTE study center, you can visit the center in
                person and fill out an application form. Alternatively, you can
                apply online through our website using the Student Application
                form. You'll need to provide your personal details, educational
                background, and choose your desired course.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What documents are required for admission?
              </h3>
              <p className="text-gray-600">
                The typical documents required for admission include identity
                proof (Aadhar Card, PAN Card, etc.), address proof, educational
                certificates, passport-sized photographs, and the admission fee.
                Specific requirements may vary based on the course and center,
                so it's best to check with your chosen study center.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Are all CIVTE centers authorized?
              </h3>
              <p className="text-gray-600">
                Yes, all study centers listed on our website are authorized
                CIVTE franchises. To verify a center's authenticity, you can use
                the Franchise Verification feature on our website or contact our
                head office directly. Be cautious of unauthorized centers
                claiming to be affiliated with CIVTE.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How do I become a CIVTE franchise?
              </h3>
              <p className="text-gray-600">
                To become a CIVTE franchise, you need to fill out the Franchisee
                Application Form on our website. Our team will review your
                application, conduct a site inspection, and guide you through
                the agreement process. You'll need to meet certain
                infrastructure and financial requirements to qualify.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ListCenter;
