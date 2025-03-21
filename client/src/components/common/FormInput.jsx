// src/components/common/FormInput.jsx
import { useState } from "react";

const FormInput = ({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
  readOnly = false,
  error = "",
  helpText = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  containerClassName = "",
  icon = null,
  iconPosition = "left",
  min,
  max,
  step,
  autoFocus = false,
  ...props
}) => {
  // For password fields, add show/hide functionality
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const inputType = type === "password" && showPassword ? "text" : type;

  // Input field classes
  const baseInputClasses = `
    w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC0729] focus:border-[#EC0729]
    ${error ? "border-red-500" : "border-gray-300"}
    ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
    ${icon && iconPosition === "left" ? "pl-10" : ""}
    ${icon && iconPosition === "right" ? "pr-10" : ""}
    ${type === "password" ? "pr-10" : ""}
    ${inputClassName}
  `;

  return (
    <div className={`${containerClassName}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id || name}
          className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}
        >
          {label} {required && <span className="text-[#EC0729]">*</span>}
        </label>
      )}

      {/* Input Field with Icon */}
      <div className="relative">
        {icon && iconPosition === "left" && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={id || name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          min={min}
          max={max}
          step={step}
          autoFocus={autoFocus}
          className={baseInputClasses}
          {...props}
        />

        {icon && iconPosition === "right" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        {/* Show/Hide Password Button */}
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-500"
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
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {/* Help Text */}
      {helpText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

export default FormInput;
