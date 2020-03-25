import React from "react";

const CheckOutItem = ({ item }) => {
  return (
    <React.Fragment>
      <div className="col-3 text-left font-weight-bold">{item.name}</div>
      <div className="col-2">Size: {item.isHalf ? "Half" : "Full"}</div>
      <div className="col-2">Quantity: {item.quantity}</div>
      <div className="col-2">Price: &#8377; {item.price}</div>
      <div className="col-3 text-right font-weight-bold">
        &#8377; {item.price * item.quantity}
      </div>
    </React.Fragment>
  );
};

export default CheckOutItem;
