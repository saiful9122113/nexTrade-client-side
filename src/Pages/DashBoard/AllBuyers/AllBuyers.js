import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider"
import Loading from "../../Shared/Loading/Loading"
import BuyerCard from "./BuyerCard";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  const [ loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (!user?.email) return;
    fetch('http://localhost:5000/category/User',{
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
         console.log(data);
        setSellers(data);
      });
  }, [user?.email, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">All Seller</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-6">
        {
            sellers.length &&
            sellers.map(seller=><BuyerCard
            key={seller._id}
            seller={seller}
            ></BuyerCard>)
        }
      </div>
    </div>
  );
};

export default AllBuyers;
