import React from "react";

const MyProductCard = ({ product, setProduct }) => {
  const {
    ProductImg,
    category,
    condition,
    description,
    email,
    location,
    mobileNumber,
    productName,
    productOriginalPrice,
    productResalePrice,
    purchaseYear,
    timestamp,
  } = product;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={ProductImg}
        alt={productName}
        className="w-full h-60 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold">{productName}</h2>
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            {condition}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-700 mb-4">
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Original Price:</strong> ${productOriginalPrice}
          </p>
          <p>
            <strong>Resale Price:</strong> ${productResalePrice}
          </p>
          <p>
            <strong>Post Time:</strong> {timestamp}
          </p>
          <p>
            <strong>Purchase Year:</strong> {purchaseYear}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-2">
          <strong>Contact:</strong> {mobileNumber} | {email}
        </p>
        <p className="text-sm text-gray-700 mb-4">{description}</p>

        <button
          onClick={() => setProduct(product)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MyProductCard;
