import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyProductCard from "../MyProductCard/MyProductCard";
import Loading from "../../Shared/Loading/Loading";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true)
    fetch(`http://localhost:5000/products/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyProducts(data);
      });
  }, [user?.email]);

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold">My Product</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 mt-6">
            {
                myProducts.map(product=><MyProductCard
                key={product._id}
                product={product}
                ></MyProductCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
