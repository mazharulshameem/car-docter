import React from "react";

const OrderRow = ({ order }) => {
  const { serviceName, phone, customer, email, price } = order;
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>{email}</td>
        <th>
          <button className="btn btn-error">Pending</button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
