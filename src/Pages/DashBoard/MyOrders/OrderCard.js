import React from "react";

const OrderCard = ({ order }) => {
  const { productName, productPrice } = order;
  return (
    <div className="card w-96 glass">
      <div className="card-body">
        <h1 className="card-title">Name: {productName}</h1>
        <h2>Price: {productPrice}</h2>
      </div>
    </div>
  );
};

export default OrderCard;
