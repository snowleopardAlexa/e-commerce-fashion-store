import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categoriesItems } from '../data/data';

const Container = styled.div `
  display: flex;
  padding: 20px;
  justify-content: space-between;
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