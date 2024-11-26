import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { categories } from "../Categories/Categories";

const CategoryDataCard = ({ productId, product }) => {
  const navigate = useNavigate();
  const {
    ProductImg,
    category: categoryName,
    condition,
    productName,
    productResalePrice,
  } = product;

  const categoryId = categories.findIndex(
    (category) => category.name === categoryName
  );

  return (
    <div
      className="flex items-center border-2 border-yellow-400 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 mx-auto"
      style={{ width: "500px", height: "200px" }}
    >
      {/* Product Image */}
      <img
        src={ProductImg}
        alt={productName}
        className="w-32 h-32 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-bold truncate" title={productName}>
          {productName}
        </h2>
        <p className="text-gray-600 text-sm">
          {categoryName}, {condition}
        </p>
        <p className="text-green-600 text-lg font-semibold mt-2">
          TK {productResalePrice}
        </p>
        {/* Pass product details in the state */}
        <button
          onClick={() =>
            navigate(`/category/${categoryId + 1}/products/${productId}`, {
              state: { product },
            })
          }
          className="btn btn-success"
        >
          Details &nbsp; <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryDataCard;
