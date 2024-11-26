import React from "react";

const BuyerCard = ({ seller }) => {
  const { name, email } = seller;
  return (
    <div className="card w-96 glass">
      <div className="card-body">
        <h1 className="card-title">Name: {name}</h1>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default BuyerCard;
