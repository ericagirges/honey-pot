import React, { useContext } from 'react';
import BeautyContext from "../contexts/BeautyContext";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";

// styling for beauty page starts here
const ProductsPage = styled.section `
    height: 90vh;
    margin: 40px auto 60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: "Lato";
`

const Beauty = () => {

    const value = useContext(BeautyContext)

    return (
        <ProductsPage>
			{value.beautyProducts.map(product => (
				<ProductDetails
					key={product.id}
					product={product}
					addItem={value.addItem}
				/>
			))}
        </ProductsPage>
    )

};

export default Beauty;