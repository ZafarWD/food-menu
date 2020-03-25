import React, { Component } from "react";

import { Link } from "react-router-dom";
import CheckOutItem from "./CheckOutItem";

class Checkout extends Component {
  state = {
    listToRender: []
  };

  componentDidMount() {
    const { list } = this.props;
    const listToRender = list.filter(item => item.isSelected);
    this.setState({ listToRender });
  }

  calculateTotal() {
    const { listToRender } = this.state;
    let total = 0;
    if (!listToRender.length) return;
    for (let item of listToRender) {
      console.log(item);
      total += item.price * item.quantity;
      console.log(total);
    }
    return (
      <div className="d-flex flex-row-reverse">
        <h1 className="badge badge-danger mr-4" style={{ fontSize: "25px" }}>
          Total: &#8377; {total}
        </h1>
      </div>
    );
  }

  renderPage() {
    const { listToRender } = this.state;
    if (!listToRender.length)
      return (
        <div className="row text-center p-2 m-2" style={{ fontSize: "25px" }}>
          Select something from the&nbsp;
          <Link className="text-light" to="/">
            menu
          </Link>
          !
        </div>
      );
    return listToRender.map((item, index) => (
      <div
        key={index}
        className="row text-center p-2 bg-light text-danger m-2"
        style={{ fontSize: "25px" }}
      >
        <CheckOutItem item={item} />
      </div>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 pb-5">
          <h1 className="p-3 font-weight-bolder" style={{ fontSize: "50px" }}>
            Checkout
          </h1>
          {this.renderPage()}
          {this.calculateTotal()}
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
