// src/components/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import gsap from "gsap";
// Import Slider from react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Carousel Images
import CarouselImage1 from "../../assets/images/carousel/image1.png";
import CarouselImage2 from "../../assets/images/carousel/image2.png";
import CarouselImage3 from "../../assets/images/carousel/image3.png";
import CarouselImage4 from "../../assets/images/carousel/image4.png";
import CarouselImage5 from "../../assets/images/carousel/image5.png";

// Import Course Images
import diplomaDataEntry from "../../assets/images/courses/data-entry.png";
import certificateComputer from "../../assets/images/courses/computer-application.png";
import diplomaYoga from "../../assets/images/courses/yoga.png";
import beautyTherapist from "../../assets/images/courses/beauty-therapist.png";

const Home = () => {
  // State for carousel version toggle
  const [carouselVersion, setCarouselVersion] = useState("split");

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

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Toggle button for switching carousel versions
  const ToggleSwitch = () => (
    <div className="fixed top-24 right-4 z-50 bg-white p-2 rounded-lg shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium">Split</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={carouselVersion}
            checked={carouselVersion === "full"}
            onChange={() =>
              setCarouselVersion(carouselVersion === "split" ? "full" : "split")
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#EC0729]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EC0729]"></div>
        </label>
        <span className="text-xs font-medium">Full</span>
      </div>
    </div>
  );

  // Carousel images array
  const carouselImages = [
    { src: CarouselImage1, alt: "CIVTE Image 1" },
    { src: CarouselImage2, alt: "CIVTE Image 2" },
    { src: CarouselImage3, alt: "CIVTE Image 3" },
    { src: CarouselImage4, alt: "CIVTE Image 4" },
    { src: CarouselImage5, alt: "CIVTE Image 5" },
  ];

  // Hero section content
  const HeroContent = () => (
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
        Building careers through quality education and skill development for
        over 23 years
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/courses"
          className="bg-[#EC0729] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors z-20 relative"
        >
          Explore Courses
        </Link>
        <Link
          to="/student-form"
          className="border-2 border-[#EC0729] text-[#EC0729] hover:bg-[#EC0729] hover:text-white font-medium py-3 px-6 rounded-md transition-colors z-20 relative"
        >
          Apply Now
        </Link>
      </div>
    </motion.div>
  );

  // FullWidthHero: Carousel as background with text overlay
  const FullWidthHero = () => (
    <section
      ref={heroRef}
      className="relative py-16 md:py-24 min-h-[600px] flex items-center"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Slider {...carouselSettings} className="h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="h-full">
              <div className="h-full w-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-gray-50"
                />
                {/* Gradient overlay for text readability - reduced opacity */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl hero-content">
          <HeroContent />
        </div>
      </div>

      {/* Admissions Open Badge */}
      <div className="absolute top-6 right-6 bg-[#EC0729] text-white py-1 px-3 rounded-full text-sm font-medium z-10">
        Admissions Open
      </div>
    </section>
  );

  // SplitHero: Left text, right carousel - enhanced version
  const SplitHero = () => (
    <section
      ref={heroRef}
      className="relative min-h-[650px] flex items-center overflow-hidden"
    >
      {/* Left side with subtle gradient background - softened */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-gray-50/70 to-transparent z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 hero-content relative z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#EC0729]/5 blur-3xl -z-10"
            ></motion.div>
            <HeroContent />
          </div>

          {/* Carousel */}
          <div className="md:w-1/2 md:absolute md:right-0 md:inset-y-0 md:h-full mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-full md:h-full w-full"
            >
              {/* Subtle frame for the carousel */}
              <div className="relative h-full w-full overflow-hidden md:rounded-l-[40px]">
                {/* Semi-transparent overlay on the left edge to blend with the text section - softened and z-index lowered */}
                <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-white/40 to-transparent z-5"></div>

                <div className="h-full">
                  <Slider {...carouselSettings} className="h-full">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className="carousel-slide h-[400px] md:h-[650px]"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain bg-gray-50"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Badge positioning moved to be relative to the carousel */}
                <div className="absolute top-6 right-6 bg-[#EC0729] text-white py-2 px-4 rounded-md shadow-lg text-sm font-medium z-20">
                  Admissions Open
                </div>

                {/* Decorative elements that integrate with the carousel */}
                <div className="hidden md:block absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#EC0729]/10 blur-xl z-5"></div>
                <div className="hidden md:block absolute -top-20 -right-20 w-[150px] h-[150px] rounded-full bg-[#EC0729]/10 blur-xl z-5"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="pt-20">
      {/* Toggle Switch */}
      <ToggleSwitch />

      {/* Hero Section - conditionally render based on carouselVersion */}
      {carouselVersion === "full" ? <FullWidthHero /> : <SplitHero />}

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
