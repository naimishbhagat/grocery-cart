import React from "react";

import { connect } from "react-redux";

const GroceryCart = ({ items = [], removeFromCart }) => {
  const total = () => {
    return items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };
  if (items.length === 0) {
    return (
      <div id="grocery-cart">
        <p>The cart is empty</p>
      </div>
    );
  }
  return (
    <div id="grocery-cart">
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>Item Price</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total: ${total().toFixed(2)}</p>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cart,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeFromCart: (index) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: index });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart);
