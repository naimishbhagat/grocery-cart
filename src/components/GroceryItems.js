import React from "react";

import { connect } from "react-redux";

const GroceryItems = ({ items = [], addToCart }) => {
  return (
    <div id="grocery-items">
      <table border="1">
        <tbody>
          <tr>
            <th></th>
            <th>Item Price</th>
            <th>Item Name</th>
          </tr>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <button onClick={() => addToCart(item)}>add to cart</button>
                </td>
                <td>{item.price}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.forSale,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item) => {
      dispatch({ type: "ADD_TO_CART", payload: item });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems);
