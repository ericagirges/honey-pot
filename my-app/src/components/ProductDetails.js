import React from "react";
import styled from "styled-components";

// styling for product details starts here
const ProductContainer = styled.article `
    width: 200px;
    height: 500px;
`

const ProductImg = styled.img `
    width: 100%;
    height: auto;

`


const ProductDetails = props => {
  return (
    <ProductContainer>
      <ProductImg src={props.product.productImg} alt={`${props.product.name}`} />

      <h2>{props.product.name}</h2>
      <p>${props.product.originalPrice}</p>
      <p>${props.product.salePrice}</p>
      <p>Description: {props.product.description}</p>

      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </ProductContainer>
  );
};

export default ProductDetails;
