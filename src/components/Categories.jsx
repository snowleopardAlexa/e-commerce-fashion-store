import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../data/categories';

const Container = styled.div `

`

const Categories = () => {
    return (
        <Container>
           {categories.map((item => (

           )))}
        </Container>
    )
}

export default Categories;