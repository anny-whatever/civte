// src/components/common/PageBanner.jsx
import { motion } from "framer-motion";

const PageBanner = ({
  title,
  subtitle,
  bgColor = "bg-gradient-to-r from-[#EC0729] to-red-700",
  textColor = "text-white",
}) => {
  return (
    <div className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`${textColor} max-w-3xl mx-auto opacity-90 text-lg`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;
