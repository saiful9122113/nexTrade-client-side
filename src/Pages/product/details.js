import React from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id, productId } = useParams();
  const navigate = useNavigate();

  // Access the passed product details
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <p>Product details not available. Please go back and try again.</p>;
  }

  const {
    _id,
    email,
    productName,
    productOriginalPrice,
    productResalePrice,
    category,
    condition,
    mobileNumber,
    purchaseYear,
    location,
    description,
    ProductImg,
    timestamp
  } = product;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Title and Location */}
      <h1 className="text-2xl font-bold mb-2">{productName}</h1>
      <p className="text-gray-500 mb-4">Posted on {timestamp}, {location}</p>
      {/* <p className="text-gray-500 mb-4">Category: {category}</p> */}

      {/* Images */}
      <div className="flex">
        <div>
          <img
            src={ProductImg}
            alt={productName}
            className="w-64 h-64 object-cover rounded-md"
          />
        </div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-green-600">
          Tk {productResalePrice}
        </h2>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <p><span className="font-bold">Category:</span> {category}</p>
        <p><span className="font-bold">Year of Manufacture:</span> {purchaseYear}</p>
        <p><span className="font-bold">Condition:</span> {condition}</p>
        <p><span className="font-bold">Product Original Price:</span> {productOriginalPrice}</p>
        {/* <p><span className="font-bold">Bike type:</span> {type}</p>
        <p><span className="font-bold">Model:</span> {model}</p>
        <p><span className="font-bold">Trim / Edition:</span> {edition}</p>
        <p><span className="font-bold">Engine Capacity:</span> {engineCapacity}</p>
        <p><span className="font-bold">Kilometers Run:</span> {kilometersRun}</p> */}
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Description</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Purchase Button */}
      <div>
        <button
          className="btn btn-success mt-4"
          onClick={() =>
            navigate(`/category/${id}/products/${productId}/purchase`, {
              state: { product },
            })
          }
        >
          <BiSolidPurchaseTag /> &nbsp; Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
