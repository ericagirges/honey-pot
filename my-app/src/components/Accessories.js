import React, { useContext } from 'react';
import AccessoriesContext from "../contexts/AccessoriesContext";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";

// styling for accessories pages starts here
const ProductsPage = styled.section `
    margin: 40px auto 60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: "Lato", sans-serif;
    @media(min-width: 800px) {
        margin: 40px 200px 60px 200px;
    }
`

const Accessories = () => {

    const value = useContext(AccessoriesContext)

    return (
        <ProductsPage>
			{value.accProducts.map(product => (
				<ProductDetails
					key={product.id}
					product={product}
					addItem={value.addItem}
				/>
			))}
        </ProductsPage>
    )

};

export default Accessories;