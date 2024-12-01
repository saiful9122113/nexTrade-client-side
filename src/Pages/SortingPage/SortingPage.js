import React, { useState, useEffect } from "react";
import axios from "axios";

const SortingPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // API Call to Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products", {
        params: { sort: sortOrder, minPrice, maxPrice },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products on filter/sort change
  useEffect(() => {
    fetchProducts();
  }, [sortOrder, minPrice, maxPrice]);

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Sorting Options */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>

      {/* Price Range Filtering */}
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={fetchProducts}>Apply Filters</button>

      {/* Display Products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingPage;
