import React, { useContext } from 'react';
import CollectiblesContext from "../contexts/CollectiblesContext";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";

// styling for Collectibles page starts here
const ProductsPage = styled.section `
    height: 90vh;
    margin: 40px auto 60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-family: "Lato";
`

const Collectibles = () => {

    const value = useContext(CollectiblesContext)

    return (
        <ProductsPage>
			{value.collectProducts.map(product => (
				<ProductDetails
					key={product.id}
					product={product}
					addItem={value.addItem}
				/>
			))}
        </ProductsPage>
    )

};

export default Collectibles;