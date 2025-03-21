// src/components/pages/About.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import gsap from "gsap";

// Import images
import aboutImage from "../../assets/images/about-image.png";
import logoImage from "../../assets/images/logo.png";
import certificationImage from "../../assets/images/iso-certification.png";

const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // GSAP animation
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (timeline) {
      gsap.fromTo(
        timeline.querySelectorAll(".timeline-item"),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About CIVTE
              </h1>
              <div className="h-1 w-20 bg-[#EC0729] mb-6"></div>
              <p className="text-gray-600 mb-4">
                Central Institute of Vocational and Technical Education (CIVTE)
                is an autonomous body run by VESP, registered under the
                Societies Registration Act 1860 and the B.P.T Act of 1950 Govt.
                of Maharashtra.
              </p>
              <p className="text-gray-600 mb-4">
                We follow the guidelines of National Education Policy 1986 / NEP
                2020 and Program of Action 1992 Government of India. VESP is an
                ISO 9001-2015 with IAF Certified organization and Recognized by
                Niti Aayog, Govt. Of India.
              </p>
              <p className="text-gray-600">
                CIVTE is approved by RashtriyaGramin Saksharta Mission (KAUSHAL
                VIKAS MISSION) Ministry of Education, Govt. Of India. Our
                courses are designed considering NVEQF (National Vocational
                Education Qualifications Framework) Policy under Ministry of
                Human Resource Development.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-[#EC0729]/10 -z-10"></div>
                <img
                  src={aboutImage}
                  alt="CIVTE Campus"
                  className="rounded-lg shadow-lg w-full object-cover h-80"
                />
                <div className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-md shadow-md">
                  <div className="flex items-center">
                    <img
                      src={logoImage}
                      alt="CIVTE Logo"
                      className="h-10 mr-2"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#EC0729]">
                        Established
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        23 Years Ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16" ref={sectionRef}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto mb-6"></div>
          <p className="text-gray-600 mb-4">
            Central Institute of vocational & Technical Education (CIVTE) was
            established with a solo motive to provide best education skills to
            the concerned students who want to create their future in the field
            of technology and enhancing the skills of the students by providing
            best knowledge and faculty to our students with a view to attain
            "Sincerity, Authority and Superiority"
          </p>
          <p className="text-gray-600">
            Our Quality education chain is not limited to Maharashtra only but
            we also provide education in other states of India with a great
            quality. CIVTE provides great job opportunities to the concerned
            students of the Institute with assured placement in good and reputed
            companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#EC0729]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[#EC0729]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To promote global competitiveness through quality education
                  and skills development
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To establish value-creating networks with industries and
                  educational institutes
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To leverage intellectual capital through research activities
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To synergize activities through shared infrastructure and
                  industry interface
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#EC0729]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[#EC0729]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  Create opportunities for all to acquire skills throughout life
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  Promote commitment by all stakeholders to own skill
                  development initiatives
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  Develop a high-quality skilled workforce relevant to current
                  employment needs
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To democratize education and provide accessibility to higher
                  education
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Aims */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#EC0729]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[#EC0729]"
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
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Aims</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To provide best quality vocational training to people not
                  educated in the regular pattern
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To develop skills so that they obtain necessary employable
                  skills
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>
                  To help students become self-reliant through practical
                  education
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#EC0729] mr-2 mt-1"
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
                <span>To promote vocational education throughout India</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Vocational Education Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Vocational Education
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto mb-6"></div>
            <p className="text-gray-600 mb-6">
              Vocational Education and Training, also called Career and
              Technical Education, prepares learners for jobs that are based in
              manual or practical activities, traditionally non-academic and
              totally related to a specific trade, occupation or vocation, hence
              the term. It is sometimes referred to as technical education, as
              the learner directly expertise in a particular group of techniques
              or technology.
            </p>
            <p className="text-gray-600 mb-6">
              Vocational education might be classified as teaching procedural
              knowledge. This may be contrasted with declarative knowledge, as
              used in education in a usually broader scientific field, which
              might concentrate on theory and abstract conceptual knowledge,
              characteristic of tertiary education.
            </p>
            <p className="text-gray-600">
              As the labor market becomes more specialized and economic demand
              higher level of skill, government and businesses are increasingly
              investing in the future of vocational education through publicly
              funded training organizations and subsidized apprenticeship or
              traineeship in initiatives for business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Principles & Features */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Principles Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Principles of CIVTE
              </h2>
              <div className="h-1 w-20 bg-[#EC0729] mb-6"></div>

              <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Localized approach
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Focusing on local needs and context for better relevance
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Maximum Impact skills and sectors
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Strategically chosen for optimal employment outcomes
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Subsidized Fee structure
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      To provide accessibility to education for all
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Centrally administered 'Train the Trainers'
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Ensuring quality and consistency in teaching
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Placement assistance
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Connecting candidates to jobs after completion
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Features of CIVTE
              </h2>
              <div className="h-1 w-20 bg-[#EC0729] mb-6"></div>

              <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Across sectors and across the country
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Wide range of courses available nationwide
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Short duration, focused and modular programs
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Designed for quick skill acquisition
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Practical hands-on focus
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Emphasis on applied learning rather than theory
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Delivery in the local language
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Making education accessible to all
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Flexible scheduling options
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Full day, half day or weekend programs
                    </p>
                  </div>
                </li>

                <li className="flex items-start bg-white p-4 rounded-md shadow-sm">
                  <div className="bg-[#EC0729]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-[#EC0729] font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Full mobility between educational streams
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Multi-point entry and exit between formal, vocational
                      education and job market
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recognition & Certification */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recognitions & Certifications
            </h2>
            <div className="h-1 w-20 bg-[#EC0729] mx-auto mb-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={certificationImage}
                  alt="ISO Certification"
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  ISO 9001-2015 Certified
                </h3>
                <p className="text-gray-600 text-center">
                  VESP is an ISO 9001-2015 with IAF Certified organization,
                  ensuring quality management standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md mb-4">
                  <div className="text-center">
                    <svg
                      className="w-20 h-20 mx-auto text-[#EC0729]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="text-gray-600 mt-4 font-medium">
                      Government of India
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Government Recognition
                </h3>
                <p className="text-gray-600 text-center">
                  CIVTE Diploma / Certificates are eligible for Registration in
                  Govt. Employment Exchanges throughout India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#EC0729] to-red-700 rounded-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join Central Institute of Vocational & Technical Education
              </h2>
              <p className="mb-8">
                Take the first step towards a successful career with our
                industry-recognized courses and hands-on training approach. Our
                certificates are valued by employers across India.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/student-form"
                  className="bg-white text-[#EC0729] hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Apply for Admission
                </Link>
                <Link
                  to="/contact-us"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#EC0729] font-medium py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
