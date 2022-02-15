import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categoriesItems } from "../../././data/CategoriesData";
import { mediaQueries } from '../responsive';

const Container = styled.div `
  display: flex;
  padding: 20px;
  justify-content: space-between;

  
  ${mediaQueries("md")`
    padding: 0px;
    flex-direction: column;
`}
${mediaQueries("lr")`
    padding: 0px;
    flex-direction: column;
`}
`;

const CategoriesTitle = styled.h1 `
    font-size: 5rem;
    text-align: center;
`;



const Categories = ({ img }) => {
  return (
    <>
    <CategoriesTitle>Categories</CategoriesTitle>
    <Container>
      {categoriesItems.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    
    </>
  );
};

export default Categories;