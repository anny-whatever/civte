// src/components/pages/Home.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import gsap from "gsap";
import HeroImage from "../../assets/images/hero-image.png";

// Import Course Images
import diplomaDataEntry from "../../assets/images/courses/data-entry.png";
import certificateComputer from "../../assets/images/courses/computer-application.png";
import diplomaYoga from "../../assets/images/courses/yoga.png";
import beautyTherapist from "../../assets/images/courses/beauty-therapist.png";

const Home = () => {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  // Animation for stats counter
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      const animateValue = (id, start, end, duration) => {
        const obj = document.getElementById(id);
        if (!obj) return;

        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const value = Math.floor(progress * (end - start) + start);
          obj.innerHTML = value;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      animateValue("years-count", 0, 23, 2000);
      animateValue("students-count", 0, 200, 2000);
      animateValue("faculty-count", 0, 16, 1500);
    }
  }, [isInView, controls]);

  // GSAP animation for hero section
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.querySelector(".hero-content"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h6 className="text-[#EC0729] font-semibold mb-2">
                  Government Recognized
                </h6>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Central Institute of Vocational & Technical Education
                </h1>
                <p className="text-gray-600 mb-6 text-lg">
                  Building careers through quality education and skill
                  development for over 23 years
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/courses"
                    className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    to="/student-form"
                    className="border-2 border-[#EC0729] text-[#EC0729] hover:bg-[#EC0729] hover:text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-lg bg-[#EC0729]/10 -z-10 animate-pulse"></div>
                <img
                  src={HeroImage}
                  alt="CIVTE Students"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute top-4 right-4 bg-[#EC0729] text-white py-1 px-3 rounded-full text-sm font-medium">
                  Admissions Open
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h6 className="text-[#EC0729] font-semibold mb-2">ABOUT CIVTE</h6>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empowering Through Education
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Central Institute of Vocational and Technical Education (CIVTE) is
              run by VESP, an autonomous body registered under the Societies
              Registration Act 1860 and the B.P.T Act of 1950 Govt. of
              Maharashtra under Guideline of National Education Policy 1986 /
              NEP 2020 and Program of Action 1992 Government of India. VESP is
              an ISO 9001-2015 with IAF Certified organization and Recognized by
              Niti Aayog, Govt. Of India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-8 mt-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">OUR AIM</h3>
            <p className="text-gray-600 mb-4">
              Central Institute of Vocational and Technical Education with the
              sole purpose of providing and promoting Computer education and to
              generate awareness about the information technology to the public.
              The main area of our work, especially for Pan India, is because of
              those who can actually use the knowledge of information technology
              to improve the quality of information and enhance the lifestyle.
              Also, it aims to develop small businessmen who can give IT
              education in local language to local entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h6 className="text-[#EC0729] font-semibold mb-2">
              OUR ACHIEVEMENTS
            </h6>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose CIVTE?
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="text-3xl font-bold text-[#EC0729]"
                  id="years-count"
                >
                  23
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-600">
                EXPERIENCE IN BUILDING SUCCESSFUL CAREERS
              </p>
            </motion.div>

            {/* Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="text-3xl font-bold text-[#EC0729]"
                  id="students-count"
                >
                  200
                </span>
                <span className="text-3xl font-bold text-[#EC0729]">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Students</h3>
              <p className="text-gray-600">SUCCESSFULLY COMPLETED STUDENTS</p>
            </motion.div>

            {/* Faculty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span
                  className="text-3xl font-bold text-[#EC0729]"
                  id="faculty-count"
                >
                  16
                </span>
                <span className="text-3xl font-bold text-[#EC0729]">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-600">TEACHING EXPERIENCE FACULTY</p>
            </motion.div>

            {/* Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-[#EC0729]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#EC0729]">100%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Certificates
              </h3>
              <p className="text-gray-600">GOVERNMENT APPROVED CERTIFICATES</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h6 className="text-[#EC0729] font-semibold mb-2">OUR COURSES</h6>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Courses
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={diplomaDataEntry}
                alt="Diploma in Data Entry Operator"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-3">
                  Computer Course
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diploma in Data Entry Operator
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn computer typing, data management, and office
                  applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC0729] font-semibold">
                    Duration: 6 Months
                  </span>
                  <Link
                    to="/courses"
                    className="text-sm font-medium text-[#EC0729] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Course 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={certificateComputer}
                alt="Certificate in Computer Application"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold mb-3">
                  Certificate Course
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Certificate in Computer Application
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Master the basics of computer applications and software.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC0729] font-semibold">
                    Duration: 3 Months
                  </span>
                  <Link
                    to="/courses"
                    className="text-sm font-medium text-[#EC0729] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Course 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={diplomaYoga}
                alt="Diploma in Yoga Teacher Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold mb-3">
                  Teacher Training
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diploma in Yoga Teacher Training
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn yoga techniques and how to teach others effectively.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC0729] font-semibold">
                    Duration: 6 Months
                  </span>
                  <Link
                    to="/courses"
                    className="text-sm font-medium text-[#EC0729] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Course 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={beautyTherapist}
                alt="C.C. Beauty Therapist"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-semibold mb-3">
                  Vocational Course
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  C.C. Beauty Therapist
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Develop skills in beauty treatments and therapies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#EC0729] font-semibold">
                    Duration: 6 Months
                  </span>
                  <Link
                    to="/courses"
                    className="text-sm font-medium text-[#EC0729] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="inline-block bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#EC0729] to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Career Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-8"
            >
              Join thousands of students who have transformed their careers with
              our industry-recognized courses. Enroll today and take the first
              step toward a brighter future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/student-form"
                className="bg-white text-[#EC0729] hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Apply for Admission
              </Link>
              <Link
                to="/franchise-verify"
                className="border-2 border-white text-white hover:bg-white hover:text-[#EC0729] font-medium py-3 px-6 rounded-md transition-colors"
              >
                Find a Study Center
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
