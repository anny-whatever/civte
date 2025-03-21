// src/components/common/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Get current path and split into segments
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  // Function to create breadcrumb label from path segment
  const createLabel = (segment) => {
    // Convert kebab-case to title case
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="bg-gray-100 py-3 mb-6">
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-[#EC0729] hover:underline">
              Home
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            // Build path up to this segment
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <li key={segment} className="flex items-center">
                <svg
                  className="h-4 w-4 text-gray-400 mx-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {isLast ? (
                  <span className="text-gray-700 font-medium">
                    {createLabel(segment)}
                  </span>
                ) : (
                  <Link to={path} className="text-[#EC0729] hover:underline">
                    {createLabel(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
