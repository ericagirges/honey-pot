import React from "react";
import styled from "styled-components";

// styling for product details starts here
const ProductContainer = styled.article`
  width: 200px;
  height: 500px;
  margin: 20px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.h2`
  padding: 10px 0;
`;

const OriginalPrice = styled.p`
  text-decoration: line-through;
  font-weight: 700;
`;

const Sale = styled.p`
  font-weight: 700;
  color: #c8251d;
`;

const Description = styled.p`
  text-align: left;
  font-style: italic;
  padding: 5px 0;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;
`;

const AddToCart = styled.button`
  border-radius: 5px;
  margin-top: 10px;
  font-family: "Lato", sans-serif;
  display: inline-block;
  padding: 0.35em 1.2em;
  background-color: #B09D86;
  border: 0.1em solid #5C3711;
  color: white;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-align:center;
  transition: all 0.2s;
  text-transform: uppercase;
  &:hover {
    color:#000000;
    background: #ffb50c;
    border: 0.1em solid #ffb50c;
  }
`;

const ProductDetails = (props) => {
  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImg
          src={props.product.productImg}
          alt={`${props.product.name}`}
        />
      </ImageContainer>
      <ProductTitle>{props.product.name}</ProductTitle>
      <OriginalPrice>${props.product.originalPrice}</OriginalPrice>
      <Sale>${props.product.salePrice}</Sale>
      <Description>Description: {props.product.description}</Description>

      <AddToCart onClick={() => props.addItem(props.product)}>
        Add to cart
      </AddToCart>
    </ProductContainer>
  );
};

export default ProductDetails;
