import React from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Menu = ({
  menu,
  onQuantityDecrement,
  onQuantityIncrement,
  onHalfSelect,
  onFullSelect
}) => {
  return (
    <React.Fragment>
      <div className="container mt-5 pb-5">
        <h1 className="p-3 font-weight-bolder" style={{ fontSize: "50px" }}>
          Food Menu
        </h1>
        {menu.map((item, index) => (
          <div
            key={index}
            className="row text-center p-2 bg-light text-danger m-2"
            style={{ fontSize: "25px" }}
          >
            <MenuItem
              item={item}
              onQuantityDecrement={onQuantityDecrement}
              onQuantityIncrement={onQuantityIncrement}
              onHalfSelect={onHalfSelect}
              onFullSelect={onFullSelect}
            />
          </div>
        ))}
        <Link to="/checkout" className="text-light text-decoration-none">
          <button
            className="btn btn-danger ml-2 p-3 font-weight-bold"
            style={{ fontSize: "20px" }}
          >
            Checkout
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Menu;
