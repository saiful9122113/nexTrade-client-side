import React from "react";
import Category from "./Category";

export const categories = [
  { name: "Mobiles", Items: "72,570", icon: "📱" },
  { name: "Electronics", Items: "55,435", icon: "💻" },
  { name: "Vehicles", Items: "33,869", icon: "🚗" },
  { name: "Property", Items: "18,128", icon: "🏠" },
  { name: "Home & Living", Items: "17,845", icon: "🛋️" },
  { name: "Pet's & Animals", Items: "14,538", icon: "🐾" },
  { name: "Men's Fashion & Grooming", Items: "7,994", icon: "👔" },
  { name: "Women's Fashion & Beauty", Items: "7,953", icon: "👗" },
  { name: "Hobbie's, Sports & Kids", Items: "7,310", icon: "⚽" },
  { name: "Business & Industry", Items: "3,259", icon: "🏢" },
  { name: "Essentials", Items: "2,643", icon: "🛒" },
  { name: "Education", Items: "2,558", icon: "🎓" },
  { name: "Jobs", Items: "837", icon: "💼" },
  { name: "Services", Items: "783", icon: "🔧" },
  { name: "Agriculture", Items: "735", icon: "🌾" },
  { name: "Overseas Jobs", Items: "72", icon: "🌍" },
];

const Categories = () => {

  return (
    <div className="p-4">
      <h1 className="font-extrabold text-center text-3xl md:text-4xl mb-2 text-gray-800">
        Categories
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Click on a category to explore more
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Category key={index} index={index + 1} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
