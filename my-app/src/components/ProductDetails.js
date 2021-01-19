import React from "react";
import styled from "styled-components";

// styling for product details starts here
const ProductContainer = styled.article `
    width: 200px;
    height: 500px;
    margin: 20px;
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

const Description = styled.p `
    text-align: left;
    font-style: italic;
    padding: 5px 0;
`

const ImageContainer = styled.div `
    height: 250px;
    width: 100%;
`

const ProductDetails = props => {
  return (
    <ProductContainer>
      <ImageContainer>
      <ProductImg src={props.product.productImg} alt={`${props.product.name}`} />
      </ImageContainer>
      <ProductTitle>{props.product.name}</ProductTitle>
      <OriginalPrice>${props.product.originalPrice}</OriginalPrice>
      <Sale>${props.product.salePrice}</Sale>
      <Description>Description: {props.product.description}</Description>

      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </ProductContainer>
  );
};

export default ProductDetails;
