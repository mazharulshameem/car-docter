import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contextss/UserContexts";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price } = service;
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value}, ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone, message);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Place Order Successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="py-10 bg-gray-200">
      <form onSubmit={handlePlaceOrder}>
        <h1>
          You are about to order: {""}
          {title}
        </h1>
        <h1>${price}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-info w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-info w-full "
          />
        </div>
        <div>
          <textarea
            name="message"
            className="textarea textarea-secondary mt-3 w-full"
            placeholder="Type Message"
          ></textarea>
        </div>
        <input
          className="btn btn-info  mt-4 mb-3 text-center justify-center w-full"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
