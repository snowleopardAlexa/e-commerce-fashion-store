import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categoriesItems } from '../data';
import { mediaQueries } from '../responsive';

const Container = styled.div `
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mediaQueries("md")`
    padding: 0px;
    flex-direction: column;
`}
`;

const Categories = () => {
  return (
    <Container>
      {categoriesItems.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;