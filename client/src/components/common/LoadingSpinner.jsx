// src/components/common/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = ({
  size = "md",
  color = "text-[#EC0729]",
  borderColor = "border-gray-200",
  className = "",
  text = null,
  fullScreen = false,
}) => {
  // Determine spinner size classes
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
    xl: "w-24 h-24 border-4",
  };

  const spinnerSize = sizeClasses[size] || sizeClasses.md;

  const spinner = (
    <div className={`inline-block ${spinnerSize} ${className}`}>
      <div
        className={`rounded-full ${spinnerSize} border ${borderColor} border-t-transparent border-b-transparent animate-spin ${color}`}
      ></div>
    </div>
  );

  // If fullScreen is true, center the spinner in the viewport
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="text-center">
          {spinner}
          {text && <p className="mt-4 text-gray-600">{text}</p>}
        </div>
      </div>
    );
  }

  // If text is provided, show spinner with text
  if (text) {
    return (
      <div className="flex flex-col items-center justify-center">
        {spinner}
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    );
  }

  // Default: return just the spinner
  return spinner;
};

export default LoadingSpinner;
