// src/components/pages/StudentForm.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StudentForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    center: "",
    state: "",
    district: "",
    address: "",
    name: "",
    gender: "",
    fatherName: "",
    motherName: "",
    dob: "",
    mobile: "",
    email: "",
    examPass: "",
    course: "",
    marks: "",
    board: "",
    year: "",
    username: "",
    password: "",
    enrollmentNo: "",
    photo: null,
    sign: null,
    sessionStart: "",
  });

  // State for dropdown options (dummy data for demo)
  const [dropdownOptions, setDropdownOptions] = useState({
    centers: ["Center 1", "Center 2", "Center 3"],
    states: ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "Tamil Nadu"],
    districts: [],
    courses: [
      "Diploma In Computer Application",
      "Diploma In Information Technology",
      "Diploma In Computer Teacher Training",
      "Diploma In Data Entry Operator",
      "C.C. BEAUTY THERAPIST",
      "Diploma in Yoga Teacher Training",
      "Certificate in Computer Application",
    ],
  });

  // State for form submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // State for form step (multi-step form)
  const [formStep, setFormStep] = useState(1);

  // Load districts based on selected state
  useEffect(() => {
    if (formData.state) {
      // In a real app, this would fetch from an API
      // For demo, generate dummy districts based on state
      const dummyDistricts = Array.from(
        { length: 5 },
        (_, i) => `${formData.state} District ${i + 1}`
      );
      setDropdownOptions((prev) => ({
        ...prev,
        districts: dummyDistricts,
      }));
    } else {
      setDropdownOptions((prev) => ({
        ...prev,
        districts: [],
      }));
    }
  }, [formData.state]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  // Form navigation
  const nextStep = () => {
    setFormStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the data to your server
    // For demo purposes, we'll simulate a successful submission

    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Your application has been submitted successfully! Your enrollment number will be sent to your email address shortly.",
    });

    // Reset form after submission (in a real app you might redirect instead)
    setTimeout(() => {
      setFormData({
        center: "",
        state: "",
        district: "",
        address: "",
        name: "",
        gender: "",
        fatherName: "",
        motherName: "",
        dob: "",
        mobile: "",
        email: "",
        examPass: "",
        course: "",
        marks: "",
        board: "",
        year: "",
        username: "",
        password: "",
        enrollmentNo: "",
        photo: null,
        sign: null,
        sessionStart: "",
      });
      setFormStep(1);
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
            Student Admission Form
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to apply for admission to our courses. All
            fields marked with <span className="text-[#EC0729]">*</span> are
            required.
          </p>
        </motion.div>

        {/* Form Success Message */}
        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-3xl mx-auto mb-8 p-4 rounded-md ${
              formStatus.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </motion.div>
        )}

        {/* Form Steps Progress */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between">
            <div
              className={`w-1/3 text-center ${
                formStep >= 1 ? "text-[#EC0729]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  formStep >= 1
                    ? "bg-[#EC0729] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="text-sm font-medium">Personal Details</span>
            </div>
            <div
              className={`w-1/3 text-center ${
                formStep >= 2 ? "text-[#EC0729]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  formStep >= 2
                    ? "bg-[#EC0729] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="text-sm font-medium">Academic Information</span>
            </div>
            <div
              className={`w-1/3 text-center ${
                formStep >= 3 ? "text-[#EC0729]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  formStep >= 3
                    ? "bg-[#EC0729] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="text-sm font-medium">Account & Documents</span>
            </div>
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-[#EC0729] rounded transition-all duration-300"
              style={{ width: `${(formStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          key={formStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        >
          <form onSubmit={handleSubmit}>
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#EC0729] to-red-700 p-6">
              <h2 className="text-xl font-bold text-white">
                {formStep === 1
                  ? "Personal Details"
                  : formStep === 2
                  ? "Academic Information"
                  : "Account & Document Upload"}
              </h2>
            </div>

            {/* Step 1: Personal Details */}
            {formStep === 1 && (
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Center Selection */}
                  <div>
                    <label
                      htmlFor="center"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Study Center <span className="text-[#EC0729]">*</span>
                    </label>
                    <select
                      id="center"
                      name="center"
                      value={formData.center}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    >
                      <option value="">Select Center</option>
                      {dropdownOptions.centers.map((center, index) => (
                        <option key={index} value={center}>
                          {center}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* State Selection */}
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
                      {dropdownOptions.states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* District Selection */}
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
                      {dropdownOptions.districts.map((district, index) => (
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

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Address <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender <span className="text-[#EC0729]">*</span>
                    </label>
                    <div className="flex space-x-4 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleChange}
                          className="form-radio text-[#EC0729] focus:ring-[#EC0729]"
                        />
                        <span className="ml-2 text-gray-700">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleChange}
                          className="form-radio text-[#EC0729] focus:ring-[#EC0729]"
                        />
                        <span className="ml-2 text-gray-700">Female</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="other"
                          checked={formData.gender === "other"}
                          onChange={handleChange}
                          className="form-radio text-[#EC0729] focus:ring-[#EC0729]"
                        />
                        <span className="ml-2 text-gray-700">Other</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Father's Name */}
                  <div>
                    <label
                      htmlFor="fatherName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Father's Name <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      placeholder="Enter father's name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>

                  {/* Mother's Name */}
                  <div>
                    <label
                      htmlFor="motherName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mother's Name <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      placeholder="Enter mother's name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date of Birth */}
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

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile Number <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-[#EC0729]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {formStep === 2 && (
              <div className="p-6 space-y-6">
                {/* Course Selection */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Course <span className="text-[#EC0729]">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  >
                    <option value="">Select a Course</option>
                    {dropdownOptions.courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Highest Qualification */}
                <div>
                  <label
                    htmlFor="examPass"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Highest Qualification{" "}
                    <span className="text-[#EC0729]">*</span>
                  </label>
                  <select
                    id="examPass"
                    name="examPass"
                    value={formData.examPass}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  >
                    <option value="">Select Qualification</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Marks or Grade */}
                  <div>
                    <label
                      htmlFor="marks"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Marks(%) / Grade <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="marks"
                      name="marks"
                      value={formData.marks}
                      onChange={handleChange}
                      required
                      placeholder="Enter marks or grade"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>

                  {/* Board / University */}
                  <div>
                    <label
                      htmlFor="board"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Board / University{" "}
                      <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="text"
                      id="board"
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      required
                      placeholder="Enter board or university"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>

                  {/* Passing Year */}
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Passing Year <span className="text-[#EC0729]">*</span>
                    </label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      min="1980"
                      max={new Date().getFullYear()}
                      placeholder="Enter passing year"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                    />
                  </div>
                </div>

                {/* Session Start */}
                <div>
                  <label
                    htmlFor="sessionStart"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Session Start <span className="text-[#EC0729]">*</span>
                  </label>
                  <select
                    id="sessionStart"
                    name="sessionStart"
                    value={formData.sessionStart}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  >
                    <option value="">Select Session</option>
                    <option value="January 2025">January 2025</option>
                    <option value="July 2025">July 2025</option>
                    <option value="January 2026">January 2026</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Account & Documents */}
            {formStep === 3 && (
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
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
                      Username must be at least 5 characters long and can
                      contain letters and numbers.
                    </p>
                  </div>

                  {/* Password */}
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
                </div>

                {/* Enrollment Number (If already assigned) */}
                <div>
                  <label
                    htmlFor="enrollmentNo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Enrollment No (If already assigned)
                  </label>
                  <input
                    type="text"
                    id="enrollmentNo"
                    name="enrollmentNo"
                    value={formData.enrollmentNo}
                    onChange={handleChange}
                    placeholder="Enter enrollment number (if applicable)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo Upload */}
                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Upload Photo <span className="text-[#EC0729]">*</span>
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            JPG or PNG (MAX. 300KB)
                          </p>
                        </div>
                        <input
                          id="photo"
                          name="photo"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          required={!formData.photo}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.photo && (
                      <p className="mt-2 text-sm text-green-600">
                        File selected: {formData.photo.name}
                      </p>
                    )}
                  </div>

                  {/* Signature Upload */}
                  <div>
                    <label
                      htmlFor="sign"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Upload Signature <span className="text-[#EC0729]">*</span>
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            JPG or PNG (MAX. 300KB)
                          </p>
                        </div>
                        <input
                          id="sign"
                          name="sign"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          required={!formData.sign}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.sign && (
                      <p className="mt-2 text-sm text-green-600">
                        File selected: {formData.sign.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="form-checkbox text-[#EC0729] focus:ring-[#EC0729] h-5 w-5"
                    />
                    <span className="ml-2 text-gray-700">
                      I hereby declare that all the information provided by me
                      is true to the best of my knowledge and I agree to the{" "}
                      <a href="#" className="text-[#EC0729] hover:underline">
                        terms and conditions
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Form Navigation Buttons */}
            <div className="px-6 py-4 bg-gray-50 flex justify-between">
              {formStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Previous
                </button>
              )}

              {formStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors ml-auto"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Important Information
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Make sure all information is accurate and documents are
                      clearly visible.
                    </li>
                    <li>
                      Incomplete applications may result in processing delays.
                    </li>
                    <li>
                      You will receive a confirmation email with your enrollment
                      details once your application is processed.
                    </li>
                    <li>
                      For any assistance, contact our admission helpline at +91
                      9306956308.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
