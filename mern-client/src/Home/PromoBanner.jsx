import React from "react";
// import { Link } from 'react-router-dom'
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={bookPic} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
