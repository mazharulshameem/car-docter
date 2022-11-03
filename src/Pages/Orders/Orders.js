import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contextss/UserContexts";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <h1 className="text-3xl">You Have{orders.length} Orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <div>
              {orders.map((order) => (
                <OrderRow key={order._id} order={order}></OrderRow>
              ))}
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
