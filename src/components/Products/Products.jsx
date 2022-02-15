import React from 'react';
import styled from 'styled-components';
import { popularProducts, dressesProducts } from "../../././data/ProductsData";
import Product from './Product';

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductsTitle = styled.h1`
   color: black;
   font-size: 5rem;
   text-align: center;
`;

const Products = () => {
    return (
        <>
         <ProductsTitle>Bags</ProductsTitle>
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        <Container>
            {dressesProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
        </>
    );
}

export default Products;