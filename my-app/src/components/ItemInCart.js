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

const Item = (props) => {
  return (
    <ItemContainer>
      <StyledImg src={props.productImg} alt={`${props.name}`} />

      <ItemName>{props.name}</ItemName>
      <ItemDetails>
        <StyledPrice>$ {props.salePrice}</StyledPrice>
        <button>Remove from cart</button>
      </ItemDetails>
    </ItemContainer>
  );
};

export default Item;
