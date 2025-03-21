// src/components/common/Button.jsx
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  icon = null,
  iconPosition = "left",
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  // Determine button variant styles
  const variantClasses = {
    primary:
      "bg-[#EC0729] hover:bg-red-700 text-white border border-transparent",
    secondary:
      "border-2 border-[#EC0729] text-[#EC0729] hover:bg-[#EC0729] hover:text-white",
    yellow:
      "bg-[#FEE900] hover:bg-[#ECD900] text-gray-900 border border-transparent",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-[#EC0729] hover:bg-red-50 border border-transparent",
    link: "text-[#EC0729] hover:underline bg-transparent border-0 px-0",
  };

  // Determine button size styles
  const sizeClasses = {
    sm: "text-sm py-1 px-3 rounded",
    md: "py-2 px-4 rounded-md",
    lg: "text-lg py-3 px-6 rounded-md",
  };

  // Base button classes
  const buttonClasses = `
    font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:ring-offset-2
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `;

  // Create icon element
  const iconElement = icon && (
    <span className={`${iconPosition === "left" ? "mr-2" : "ml-2"}`}>
      {icon}
    </span>
  );

  // Render button content
  const buttonContent = (
    <>
      {icon && iconPosition === "left" && iconElement}
      {children}
      {icon && iconPosition === "right" && iconElement}
    </>
  );

  // If "to" prop is provided, render Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // If "href" prop is provided, render anchor tag
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Otherwise, render button
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
