import React from "react";
import styled from "styled-components";

// styling for product details starts here
const ProductContainer = styled.article `
    width: 200px;
    height: 500px;
    margin: 50px 20px;
`

const ProductImg = styled.img `
    width: 100%;
    height: auto;
`

const ProductTitle = styled.h2 `
    padding: 10px 0;
`

const OriginalPrice = styled.p `
    text-decoration: line-through;
    font-weight: 700;
`

const Sale = styled.p `
    font-weight: 700;
    color: #C8251D;
`


const ProductDetails = props => {
  return (
    <ProductContainer>
      <ProductImg src={props.product.productImg} alt={`${props.product.name}`} />

      <ProductTitle>{props.product.name}</ProductTitle>
      <OriginalPrice>${props.product.originalPrice}</OriginalPrice>
      <Sale>${props.product.salePrice}</Sale>
      <p>Description: {props.product.description}</p>

      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </ProductContainer>
  );
};

export default ProductDetails;
