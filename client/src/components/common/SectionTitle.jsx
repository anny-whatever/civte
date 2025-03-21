// src/components/common/SectionTitle.jsx
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  subtitle,
  label,
  align = "center",
  divider = true,
  labelColor = "text-[#EC0729]",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-600",
  className = "",
}) => {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-8 ${alignmentClasses[align]} ${className}`}
    >
      {label && <h6 className={`${labelColor} font-semibold mb-2`}>{label}</h6>}

      <h2 className={`text-3xl font-bold ${titleColor} mb-4`}>{title}</h2>

      {divider && (
        <div
          className={`h-1 w-20 bg-[#EC0729] ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          } mb-6`}
        ></div>
      )}

      {subtitle && (
        <p
          className={`${subtitleColor} max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
