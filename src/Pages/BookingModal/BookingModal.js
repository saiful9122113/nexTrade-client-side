import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ product, setProduct }) => {
  const { productName, productResalePrice } = product;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const location = form.location.value;
    const number = form.number.value;

    const orderInfo = {
      buyerName,
      email,
      productName,
      productPrice,
      location,
      number,
    };

    fetch("http://localhost:5000/add-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product Booked successfully");
        form.reset();
        setProduct(null);
      })
      .catch((er) => console.error(er));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 my-8"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.name}
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="productName"
              type="text"
              defaultValue={productName}
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="productPrice"
              type="number"
              defaultValue={productResalePrice}
              disabled
              className="input input-bordered w-full"
            />
            <input
              name="location"
              type="text"
              placeholder="Type here location"
              className="input input-bordered w-full"
              required
            />
            <input
              name="number"
              type="number"
              placeholder="Type Your Number"
              className="input input-bordered w-full"
              required
            />
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
