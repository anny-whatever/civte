// src/components/common/Notification.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({
  message,
  type = "success",
  duration = 5000,
  onClose = () => {},
  showIcon = true,
  showDismiss = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close notification after duration
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for exit animation to complete
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  // Handle manual close
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for exit animation to complete
  };

  // Determine notification type styles and icon
  const typeConfig = {
    success: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-200",
      icon: (
        <svg
          className="h-5 w-5 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    error: {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-200",
      icon: (
        <svg
          className="h-5 w-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    warning: {
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
      icon: (
        <svg
          className="h-5 w-5 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    info: {
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
      icon: (
        <svg
          className="h-5 w-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const { bgColor, textColor, borderColor, icon } =
    typeConfig[type] || typeConfig.info;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`p-4 border rounded-md ${bgColor} ${textColor} ${borderColor} ${className}`}
          role="alert"
        >
          <div className="flex items-start">
            {showIcon && <div className="flex-shrink-0 mr-3">{icon}</div>}

            <div className="flex-1">
              <p className="text-sm font-medium">{message}</p>
            </div>

            {showDismiss && (
              <div className="ml-4">
                <button
                  type="button"
                  className={`inline-flex rounded-md p-1.5 ${textColor} hover:${bgColor} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                  onClick={handleClose}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="h-5 w-5"
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
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
