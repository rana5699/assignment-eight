/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">404 Not Found!</h1>
          <p className="text-lg mt-4">
            Oops! It seems like the page you're looking for doesn't exist.
          </p>
          <p className="text-lg mt-2">
            Let's get you back on track. Maybe you can find what you're looking
            for in our{" "}
            <Link to="/" className="text-blue-500 underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
