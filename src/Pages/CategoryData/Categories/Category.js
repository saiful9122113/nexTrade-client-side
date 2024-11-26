import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category, index }) => {
  const { name, Items, icon } = category;

  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 cursor-pointer">
      <Link to={`/category/${index}`} className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 cursor-pointer">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <h1 className="font-semibold text-gray-700 text-lg">{name}</h1>
            <h1 className="text-sm text-gray-500">{Items} Items</h1>
          </div>
        </div>

      </Link>
    </div>
  );
};

export default Category;
