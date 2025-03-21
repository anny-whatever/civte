// src/components/pages/FranchiseeForm.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FranchiseeForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    ownerName: "",
    instituteName: "",
    dob: "",
    panNumber: "",
    aadharNumber: "",
    address: "",
    pincode: "",
    ownerImage: null,
    state: "",
    district: "",
    operatorCount: "",
    classroomCount: "",
    computerCount: "",
    spaceArea: "",
    whatsappNumber: "",
    contactNumber: "",
    email: "",
    qualification: "",
    hasReception: false,
    hasStaffRoom: false,
    hasWaterSupply: false,
    hasToilet: false,
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // State for form submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // States and districts data
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

  const [districts, setDistricts] = useState([]);

  // Generate districts based on selected state (dummy data for demo)
  useEffect(() => {
    if (formData.state) {
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
        // Default districts for other states
        default: [
          "District 1",
          "District 2",
          "District 3",
          "District 4",
          "District 5",
        ],
      };

      setDistricts(cityMap[formData.state] || cityMap["default"]);
    } else {
      setDistricts([]);
    }
  }, [formData.state]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "file") {
      if (files && files[0]) {
        setFormData((prev) => ({
          ...prev,
          [name]: files[0],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Passwords do not match. Please try again.",
      });
      return;
    }

    // Simulate form submission (would connect to backend in production)
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Your franchise application has been submitted successfully! We will review your application and contact you within 3-5 business days.",
    });

    // Reset form after success
    setTimeout(() => {
      if (formStatus.success) {
        setFormData({
          ownerName: "",
          instituteName: "",
          dob: "",
          panNumber: "",
          aadharNumber: "",
          address: "",
          pincode: "",
          ownerImage: null,
          state: "",
          district: "",
          operatorCount: "",
          classroomCount: "",
          computerCount: "",
          spaceArea: "",
          whatsappNumber: "",
          contactNumber: "",
          email: "",
          qualification: "",
          hasReception: false,
          hasStaffRoom: false,
          hasWaterSupply: false,
          hasToilet: false,
          username: "",
          password: "",
          confirmPassword: "",
          agreeTerms: false,
        });
      }

      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 5000);
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
            Franchisee Application
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Join our network of education centers across India. Fill out the
            form below to apply for a CIVTE franchise.
          </p>
        </motion.div>

        {/* Form Success Message */}
        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-4xl mx-auto mb-8 p-4 rounded-md ${
              formStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </motion.div>
        )}

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
            <h2 className="text-white font-bold text-xl">
              Franchisee Application Form
            </h2>
            <p className="text-white/80 mt-2">
              Fill out all the required information to apply for a CIVTE
              franchise. Fields marked with{" "}
              <span className="text-yellow-300">*</span> are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Institute Owner Name{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instituteName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Institute Name <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="instituteName"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your institute name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                  <label
                    htmlFor="panNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    PAN Number <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter PAN number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="aadharNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Aadhar Number <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="aadharNumber"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter Aadhar number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>
            </div>

            {/* Institute Address */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Institute Address
              </h3>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Institute Full Address{" "}
                  <span className="text-[#EC0729]">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Enter your institute's full address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pincode <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    placeholder="Enter pincode"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

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
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    District <span className="text-[#EC0729]">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    disabled={!formData.state}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729] disabled:bg-gray-100 disabled:text-gray-500"
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {!formData.state && (
                    <p className="mt-1 text-sm text-gray-500">
                      Please select a state first
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="ownerImage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Image of Franchise Owner{" "}
                  <span className="text-[#EC0729]">*</span>
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-2 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG or JPEG (MAX. 2MB)
                      </p>
                    </div>
                    <input
                      id="ownerImage"
                      name="ownerImage"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleChange}
                      required={!formData.ownerImage}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.ownerImage && (
                  <p className="mt-2 text-sm text-green-600">
                    File selected: {formData.ownerImage.name}
                  </p>
                )}
              </div>
            </div>

            {/* Infrastructure Details */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Infrastructure Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="operatorCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Computer Operators{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="number"
                    id="operatorCount"
                    name="operatorCount"
                    value={formData.operatorCount}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Enter number of operators"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="classroomCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Classrooms{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="number"
                    id="classroomCount"
                    name="classroomCount"
                    value={formData.classroomCount}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Enter number of classrooms"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="computerCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Total Computers <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="number"
                    id="computerCount"
                    name="computerCount"
                    value={formData.computerCount}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Enter total number of computers"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="spaceArea"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Space of Computer Center (sq. ft.){" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="number"
                    id="spaceArea"
                    name="spaceArea"
                    value={formData.spaceArea}
                    onChange={handleChange}
                    required
                    min="100"
                    placeholder="Enter area in square feet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasReception"
                      name="hasReception"
                      checked={formData.hasReception}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hasReception"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Reception
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasStaffRoom"
                      name="hasStaffRoom"
                      checked={formData.hasStaffRoom}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hasStaffRoom"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Staff Room
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasWaterSupply"
                      name="hasWaterSupply"
                      checked={formData.hasWaterSupply}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hasWaterSupply"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Water Supply
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasToilet"
                      name="hasToilet"
                      checked={formData.hasToilet}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hasToilet"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Toilet
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Contact Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="whatsappNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    WhatsApp Number <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter WhatsApp number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact Number <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter contact number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email ID <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Qualification of Institute Head{" "}
                  <span className="text-[#EC0729]">*</span>
                </label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  placeholder="Enter highest qualification"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                />
              </div>
            </div>

            {/* Account Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Account Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Create a username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Username must be at least 5 characters long and can contain
                    letters and numbers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Create a password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters long and include at
                    least one uppercase letter, one number, and one special
                    character.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-[#EC0729] focus:ring-[#EC0729] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="agreeTerms"
                    className="font-medium text-gray-700"
                  >
                    I agree to the CIVTE{" "}
                    <a href="#" className="text-[#EC0729] hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#EC0729] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <p className="text-gray-500 mt-1">
                    By submitting this form, I certify that all the information
                    provided is accurate and complete.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Information Section */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-[#FEE900] p-4">
              <h3 className="text-gray-900 font-bold">
                Why Partner with CIVTE?
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Government recognized certification</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Comprehensive course materials and curriculum</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Technical and marketing support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Online examination and certification system</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Faculty training and development programs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>23+ years of experience in vocational education</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#EC0729] mt-0.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Wide range of vocational and technical courses</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-[#FEE900] p-4">
              <h3 className="text-gray-900 font-bold">Application Process</h3>
            </div>
            <div className="p-6">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Submit Application</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Complete and submit the franchisee application form with
                      all required documents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Application Review</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Our team will review your application and contact you
                      within 3-5 business days.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Center Inspection</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      A CIVTE representative will visit your center to verify
                      the infrastructure and facilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Agreement Signing</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Upon approval, you'll sign a franchise agreement and
                      complete the fee payment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Training & Setup</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll provide training for your staff and help set up the
                      center operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EC0729]/10 w-8 h-8 rounded-full flex items-center justify-center text-[#EC0729] font-bold mr-3 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="font-medium">Center Launch</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Your CIVTE center is now ready to start operations and
                      enroll students!
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 bg-[#EC0729] rounded-lg p-6 text-white"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
            <p className="mb-6">
              If you have any questions about the franchise application process,
              please contact our franchise department.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center justify-center">
                <svg
                  className="h-6 w-6 mr-2"
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
                <span>+91 9306956308</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="h-6 w-6 mr-2"
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
                <span>franchise@civte.in</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="h-6 w-6 mr-2"
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
                <span>WhatsApp: +91 9306956308</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FranchiseeForm;
