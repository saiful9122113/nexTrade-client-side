import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import OrderCard from "./OrderCard"

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (!user?.email) return;
    fetch(`http://localhost:5000/my-orders/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setOrders(data);
      });
  }, [user?.email, setLoading]);

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="mt-4">
        <h1 className="text-center text-2xl font-bold">{orders.length>1 ? 'My Orders' : 'My Order'}</h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-6">
            {
                orders.length &&
                orders.map(order=><OrderCard
                key={order._id}
                order={order}
                ></OrderCard>)
            }
        </div>
    </div>
  );
};

export default MyOrders;
