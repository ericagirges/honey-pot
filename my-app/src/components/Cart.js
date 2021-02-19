import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";

// Components
import Item from "./ItemInCart";

const CartContainer = styled.div `
  font-family: "Lato", sans-serif;
`

const Cart = () => {
  const value = useContext(CartContext);

  // calculate cart total and determine if qualifies for free shipping
  const getCartTotal = () => {
    // set shipping to false until cart calculated
    let hasShipping = false;
    const cartTotal = value.cart
      .reduce((acc, value) => {
        if (acc + parseFloat(value.salePrice) < 25.00) {
            // set shipping to true since under 25.00
            hasShipping = true;
          return acc + parseFloat(value.salePrice) + 5.99;
        } else {
          return acc + parseFloat(value.salePrice);
        }
      }, 0)
      .toFixed(2);
      // get cart total & shipping value
      return { cartTotal, hasShipping };
  };

  const { cartTotal, hasShipping } = getCartTotal();

  return (
    <CartContainer>
      {value.cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <p className={hasShipping === true ? "show-shipping" : "hide-shipping"}>Shipping: $5.99</p>

      <div>
        <p>Total: ${cartTotal}</p>
        <button>Checkout</button>
      </div>
    </CartContainer>
  );
};

export default Cart;
