// src/components/common/PageWrapper.jsx
import { motion } from "framer-motion";
import Breadcrumb from "./Breadcrumb";

const PageWrapper = ({
  children,
  title,
  subtitle,
  showBreadcrumb = true,
  className = "",
}) => {
  return (
    <div className={`bg-gray-50 ${className}`}>
      {/* Only add the breadcrumb if showBreadcrumb is true */}
      {showBreadcrumb && <Breadcrumb />}

      {/* Page title section if title is provided */}
      {title && (
        <div className="py-8 bg-gradient-to-r from-[#EC0729] to-red-700 mb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/90 max-w-3xl mx-auto">{subtitle}</p>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default PageWrapper;
