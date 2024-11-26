import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import Slider from "../../Shared/Slider/Slider";
import CategoryDataCard from "../CategoryDataCard/CategoryDataCard";

const CategoryWiseDataFetch = () => {
  const { id } = useParams(); // Dynamically get the category ID from the URL
  const [categoryData, setCategoryData] = useState([]);
  const [product, setProduct] = useState(null);

  console.log(categoryData)

  // Map category IDs to category names
  const categoryNames = [
    "Mobiles",
    "Electronics",
    "Vehicles",
    "Property",
    "Home_Living",
    "Pets_Animals",
    "Mens_Fashion_Grooming",
    "Womens_Fashion_Beauty",
    "Hobbies_Sports_Kids",
    "Business_Industry",
    "Essentials",
    "Education",
    "Jobs",
    "Services",
    "Agriculture",
    "Overseas_Jobs",
  ];

  const categoryName = categoryNames[id - 1] || "Unknown Category"; // Fallback for invalid IDs

  useEffect(() => {
    if (!categoryName || categoryName === "Unknown Category") return;

    // Fetch data for the selected category
    fetch(`http://localhost:5000/product/${categoryName}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategoryData(data))
      .catch((err) => console.error("Error fetching category data:", err));
  }, [id, categoryName]);

  const imageArray = categoryData.map((product) => product.ProductImg);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row p-4 bg-white rounded-lg shadow-lg max-w-screen-lg w-full">
        {/* Sidebar Section */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 shadow-inner rounded-lg">
          <h3 className="font-bold text-lg mb-4">Sort Results By</h3>
          <select className="border rounded p-2 w-full mb-6">
            <option>Date: Newest on top</option>
            <option>Date: Oldest on top</option>
            <option>Price: Low to high</option>
            <option>Price: High to low</option>
          </select>

          <h3 className="font-bold text-lg mb-4">Filter Ads By</h3>
          <div className="mb-6">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Urgent
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Featured
            </label>
          </div>

          <h3 className="font-bold text-lg mb-4">Type of Poster</h3>
          <select className="border rounded p-2 w-full mb-6">
            <option>All</option>
            <option>Member</option>
            <option>Verified Seller</option>
          </select>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center w-full">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-center mb-6">
              {categoryName}
            </h1>
          </div>

          {/* Image Carousel Section */}
          {imageArray.length > 0 && (
            <div className="mb-10">
              <Slider imageArray={imageArray} />
            </div>
          )}

          {/* Category Data */}
          <div className="flex flex-col gap-4 mx-auto mt-6 px-4 max-w-4xl">
            {categoryData.length && categoryData.map((product) => (
              <CategoryDataCard
                key={product._id}
                productId={product._id}
                product={product}
                setProduct={setProduct}
              />
            ))}
          </div>

          {/* Booking Modal */}
          {product && (
            <BookingModal
              product={product}
              setProduct={setProduct}
            ></BookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseDataFetch;
