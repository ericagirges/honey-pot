import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 150px;
  height: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-family: "Lato", sans-serif;
`;

const ItemDetails = styled.div`
  width: 200px;
`;

const ItemName = styled.h2 `
    font-weight: 700;
`

const StyledPrice = styled.p`
  margin: 5px 0;
`;

const RemoveButton = styled.div `
  margin: 2px auto;
  border: 2px solid #B09D86;
  background-color: white;
  font-family: "Lato", sans-serif;
  padding: 1px 0;
  &:hover {
    transition: all 0.2s;
    border: none;
    background-color: #B09D86;
    color: white;
  }
`

const Item = (props) => {
  return (
    <ItemContainer>
      <StyledImg src={props.productImg} alt={`${props.name}`} />

      <ItemName>{props.name}</ItemName>
      <ItemDetails>
        <StyledPrice>$ {props.salePrice}</StyledPrice>
        <RemoveButton>Remove from cart</RemoveButton>
      </ItemDetails>
    </ItemContainer>
  );
};

export default Item;
