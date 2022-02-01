import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mediaQueries } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  ${mediaQueries("md")`
      font-size: 1.5rem;
   `}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mediaQueries("md")`
      width: 0px 20px;
      display: flex;
      flex-direction: column;
   `}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mediaQueries("md")`
      margin-right: 0px;
      font-size: 1rem;
   `}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mediaQueries("md")`
      margin: 10px 0px;
   `}
`;

const Option = styled.option`
  ${mediaQueries("md")`
      font-size: 0.8rem;
   `}
`;

const ProductList = () => {
    return (
        <Container>
           <Navbar />
           <Announcement />
           <Title>Bags</Title>
           <FilterContainer>
               <Filter>
                 <FilterText>Filter Products:</FilterText>
                 <Select>
                     <Option disabled selected>
                         Color
                     </Option>
                     <Option>White</Option>
                     <Option>Black</Option>
                     <Option>Red</Option>
                     <Option>Blue</Option>
                     <Option>Yellow</Option>
                     <Option>Green</Option>
                 </Select>
                 <Select>
                     <Option disabled selected>
                         Size
                     </Option>
                     <Option>XS</Option>
                     <Option>S</Option>
                     <Option>M</Option>
                     <Option>L</Option>
                     <Option>XL</Option>
                     <Option>XXL</Option>
                 </Select>
               </Filter>
               <Filter>
               <FilterText>Sort Products:</FilterText>
               <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
               </Select>
               </Filter>
           </FilterContainer>
           <Products />
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default ProductList;
