// src/components/common/Card.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({
  title,
  subtitle,
  image,
  content,
  footer,
  badge,
  to,
  href,
  onClick,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = "",
  shadow = "shadow-md",
  hoverEffect = true,
  animate = false,
  delay = 0,
  children,
}) => {
  // Card wrapper styles
  const cardClasses = `
    bg-white rounded-lg overflow-hidden
    ${shadow}
    ${hoverEffect ? "hover:shadow-lg transition-shadow" : ""}
    ${className}
  `;

  // Create card content
  const cardContent = (
    <>
      {/* Card Image/Header */}
      {(image || badge) && (
        <div className={`relative ${headerClassName}`}>
          {image &&
            (typeof image === "string" ? (
              <img
                src={image}
                alt={title || "Card image"}
                className="w-full h-48 object-cover"
              />
            ) : (
              image
            ))}
          {badge && (
            <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-[#EC0729]">
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Card Body */}
      <div className={`p-6 ${bodyClassName}`}>
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        )}
        {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
        {content && <div className="text-gray-700">{content}</div>}
        {children}
      </div>

      {/* Card Footer */}
      {footer && (
        <div
          className={`px-6 py-4 bg-gray-50 border-t border-gray-200 ${footerClassName}`}
        >
          {footer}
        </div>
      )}
    </>
  );

  // Wrap with motion if animate is true
  const card = animate ? (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {cardContent}
    </motion.div>
  ) : (
    <div className={cardClasses}>{cardContent}</div>
  );

  // If "to" prop is provided, render as Link
  if (to) {
    return (
      <Link to={to} className="block">
        {card}
      </Link>
    );
  }

  // If "href" prop is provided, render as anchor tag
  if (href) {
    return (
      <a href={href} className="block">
        {card}
      </a>
    );
  }

  // If "onClick" prop is provided, make it clickable
  if (onClick) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {card}
      </div>
    );
  }

  // Otherwise, render as a normal div
  return card;
};

export default Card;
