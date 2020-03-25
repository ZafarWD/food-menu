import React, { Component } from "react";

class MenuItem extends Component {
  state = {};

  handleChange = () => {
    console.log("here i am..");
  };

  render() {
    const {
      item,
      onQuantityDecrement,
      onQuantityIncrement,
      onHalfSelect,
      onFullSelect
    } = this.props;

    return (
      <React.Fragment>
        <div className="col-4 text-left font-weight-bold">{item.name}</div>
        <div className="col-1" style={{ fontSize: "20px" }}>
          <input
            checked={item.isHalf}
            onClick={() => onHalfSelect(item)}
            type="radio"
            id="half"
            readOnly
          />
          <label htmlFor="half">Half</label>
        </div>
        <div className="col-1" style={{ fontSize: "20px" }}>
          <input
            checked={!item.isHalf}
            type="radio"
            id="full"
            onClick={() => onFullSelect(item)}
            readOnly
          />
          <label htmlFor="full"> Full</label>
        </div>
        <div className="col-3">&#8377; {item.price}</div>
        <div className="col-3">
          <span
            className="badge badge-pill badge-danger"
            onClick={() => onQuantityDecrement(item)}
            style={{ cursor: "pointer" }}
          >
            -
          </span>
          &nbsp;{item.quantity}&nbsp;
          <span
            className="badge badge-pill badge-danger"
            onClick={() => onQuantityIncrement(item)}
            style={{ cursor: "pointer" }}
          >
            +
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuItem;
