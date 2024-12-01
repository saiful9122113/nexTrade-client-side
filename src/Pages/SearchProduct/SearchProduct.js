import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import CategoryDataCard from "../CategoryData/CategoryDataCard/CategoryDataCard";
import BookingModal from "../BookingModal/BookingModal";
// import BookingModal from "../../BookingModal/BookingModal";

const SearchProduct = () => {
  // const { id } = useParams(); // Dynamically get the category ID from the URL
  // const [categoryData, setCategoryData] = useState([]);
  const [product, setProduct] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const data = useLoaderData(); // Array of product objects

  // // console.log("Fetched Data: ", categoryData);

  // // Map category IDs to category names
  // const categoryNames = [
  //   "Mobiles",
  //   "Electronics",
  //   "Vehicles",
  //   "Property",
  //   "Home_Living",
  //   "Pets_Animals",
  //   "Mens_Fashion_Grooming",
  //   "Womens_Fashion_Beauty",
  //   "Hobbies_Sports_Kids",
  //   "Business_Industry",
  //   "Essentials",
  //   "Education",
  //   "Jobs",
  //   "Services",
  //   "Agriculture",
  //   "Overseas_Jobs",
  // ];

  // const categoryName = categoryNames[id - 1] || "Unknown Category"; // Fallback for invalid IDs

  // useEffect(() => {
  //   if (!categoryName || categoryName === "Unknown Category") return;

  //   // Fetch data for the selected category with optional price filters
  //   const fetchCategoryData = async () => {
  //     try {
  //       const fetchUrl = new URL(`http://localhost:5000/product/${categoryName}`);
  //       if (priceRange.min) fetchUrl.searchParams.append("minPrice", priceRange.min);
  //       if (priceRange.max) fetchUrl.searchParams.append("maxPrice", priceRange.max);

  //       const res = await fetch(fetchUrl, {
  //         method: "GET",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       });

  //       if (res.ok) {
  //         const data = await res.json();
  //         setCategoryData(data);
  //       } else {
  //         console.error("Failed to fetch category data.");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching category data:", err);
  //     }
  //   };

  //   fetchCategoryData();
  // }, [id, categoryName, priceRange]);

  // const imageArray = categoryData.map((product) => product.ProductImg);

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

          {/* Price Range Filter */}
          <h3 className="font-bold text-lg mb-4">Filter by Price Range</h3>
          <div className="mb-6">
            <label className="block mb-2">Min Price</label>
            <input
              type="number"
              className="border rounded p-2 w-full mb-4"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
            />
            <label className="block mb-2">Max Price</label>
            <input
              type="number"
              className="border rounded p-2 w-full mb-4"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
            />
            {/* <button
              className="bg-blue-500 text-white rounded p-2 w-full"
              onClick={() => setCategoryData([])} // Clear UI before fetching
            >
              Apply Filter
            </button> */}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center w-full">
          {/* Page Header */}
          <div>
            {data && data.length > 0 ? (
              <div className="flex flex-col gap-4 mx-auto mt-6 px-4 max-w-4xl">
                {data.map((product) => (
                  <CategoryDataCard
                    key={product._id}
                    productId={product._id}
                    product={product}
                    setProduct={setProduct}
                  />
                ))}
              </div>
            ) : (
              <p>No products found!</p>
            )}
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

export default SearchProduct;
