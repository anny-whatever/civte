// src/components/pages/Gallery.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import dummy images (replace with actual images in production)
import image1 from "../../assets/images/gallery/image1.jpg";
import image2 from "../../assets/images/gallery/image2.jpg";
import image3 from "../../assets/images/gallery/image3.jpg";
import image4 from "../../assets/images/gallery/image4.jpg";
import image5 from "../../assets/images/gallery/image5.jpg";
import image6 from "../../assets/images/gallery/image6.jpg";
import image7 from "../../assets/images/gallery/image7.jpg";
import image8 from "../../assets/images/gallery/image8.jpg";
import image9 from "../../assets/images/gallery/graduation.webp";
import image10 from "../../assets/images/gallery/image10.jpg";
import image11 from "../../assets/images/gallery/image11.jpg";
import image12 from "../../assets/images/gallery/image12.jpg";

const Gallery = () => {
  // Define gallery categories
  const categories = ["All", "Campus", "Events", "Graduation", "Workshops"];

  // Define images with categories
  const galleryImages = [
    { id: 1, src: image1, alt: "CIVTE Campus", category: "Campus" },
    { id: 2, src: image2, alt: "Computer Lab", category: "Campus" },
    { id: 3, src: image3, alt: "Annual Function", category: "Events" },
    { id: 4, src: image4, alt: "Skill Workshop", category: "Workshops" },
    { id: 5, src: image5, alt: "Guest Lecture", category: "Events" },
    { id: 6, src: image6, alt: "Industrial Visit", category: "Events" },
    { id: 7, src: image7, alt: "Student Activities", category: "Events" },
    { id: 8, src: image8, alt: "Yoga Training Session", category: "Workshops" },
    { id: 9, src: image9, alt: "Graduation Ceremony", category: "Graduation" },
    { id: 10, src: image10, alt: "Award Ceremony", category: "Events" },
    { id: 11, src: image11, alt: "Library", category: "Campus" },
    {
      id: 12,
      src: image12,
      alt: "Diploma Distribution",
      category: "Graduation",
    },
  ];

  // State for active category and selected image
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      const filtered = galleryImages.filter(
        (image) => image.category === activeCategory
      );
      setFilteredImages(filtered);
    }
  }, [activeCategory]);

  // Modal open/close functions
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
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
            Our Gallery
          </h1>
          <div className="h-1 w-20 bg-[#EC0729] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore our institute's moments captured through photos of campus
            life, events, workshops, and graduation ceremonies.
          </p>
        </motion.div>

        {/* Gallery Categories */}
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#EC0729] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative pb-[75%] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 w-full p-4">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No images found
            </h3>
            <p className="mt-1 text-gray-500">
              There are no images in the {activeCategory} category.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setActiveCategory("All")}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EC0729] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EC0729]"
              >
                View All Images
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={closeModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedImage.alt}
                </h3>
                <p className="text-gray-600">{selectedImage.category}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
