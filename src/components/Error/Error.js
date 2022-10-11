import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center mt-10 h-[56vh] items-center">
      <div className="bg-cyan-200 align-middle   p-10 rounded-md text-center">
        <h1 className="text-xs md:text-lg lg:text-4xl">Page Not Found.</h1>
        <h2 className="text-xs md:text-lg lg:text-4xl text-red-700">404 Error</h2>
        <Link to={'/home'}>
          <button className="bg-cyan-700 text-2xs md:text-lg hover:bg-cyan-900 text-white p-2 m-2 rounded-md">
            <span className="mr-2">Please Visit Our Home Page</span>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
