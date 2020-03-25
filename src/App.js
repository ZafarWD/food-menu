import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";

class App extends Component {
  state = {
    menu: [
      {
        name: "Dal fry",
        price: 69,
        isHalf: true,
        quantity: 0,
        isSelected: false
      },
      {
        name: "Dal Makhani",
        price: 89,
        isHalf: true,
        quantity: 0,
        isSelected: false
      },
      {
        name: "Kadhai Paneer",
        price: 119,
        isHalf: true,
        quantity: 0,
        isSelected: false
      },
      {
        name: "Kadhai Chicken",
        price: 149,
        isHalf: true,
        quantity: 0,
        isSelected: false
      },
      {
        name: "Chicken Lababdar",
        price: 179,
        isHalf: true,
        quantity: 0,
        isSelected: false
      },
      {
        name: "Chicken Makhani",
        price: 189,
        isHalf: true,
        quantity: 0,
        isSelected: false
      }
    ]
  };

  handleQuantityDecrement = item => {
    const menu = [...this.state.menu];
    const index = menu.indexOf(item);
    menu[index] = { ...menu[index] };
    if (!menu[index].quantity) return;
    menu[index].quantity--;
    if (!menu[index].quantity) menu[index].isSelected = false;
    this.setState({ menu });
  };

  handleQuantityIncrement = item => {
    const menu = [...this.state.menu];
    const index = menu.indexOf(item);
    menu[index] = { ...menu[index] };
    menu[index].quantity++;
    menu[index].isSelected = true;
    this.setState({ menu });
  };

  handleFullSelect = item => {
    const menu = [...this.state.menu];
    const index = menu.indexOf(item);
    menu[index] = { ...menu[index] };
    if (!menu[index].isHalf) return;
    menu[index].price = menu[index].price * 2 - 29;
    menu[index].isHalf = false;
    this.setState({ menu });
  };

  handleHalfSelect = item => {
    const menu = [...this.state.menu];
    const index = menu.indexOf(item);
    menu[index] = { ...menu[index] };
    if (menu[index].isHalf) return;
    menu[index].price = Math.ceil(menu[index].price / 2) + 14;
    menu[index].isHalf = true;
    this.setState({ menu });
  };

  render() {
    const { menu } = this.state;
    return (
      <Switch>
        <Route
          path="/checkout"
          render={props => <Checkout list={menu} {...props} />}
        />
        <Route
          path="/"
          exact
          render={props => (
            <Menu
              onQuantityDecrement={this.handleQuantityDecrement}
              onQuantityIncrement={this.handleQuantityIncrement}
              onHalfSelect={this.handleHalfSelect}
              onFullSelect={this.handleFullSelect}
              menu={menu}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
