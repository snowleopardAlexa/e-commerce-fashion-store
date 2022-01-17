import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
   height: 30px;
   background-color: #880808;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.3rem;
   font-family: 'Poppins', sans-serif;
   height: 60px;
   ${mobile({display: 'none'})}
`;

const Highlight = styled.div `
   font-family: 'Shalimar', cursive;
   font-size: 2rem;
   padding: 15px;
`;

const Annoucement = () => {
    return (
        <div>
            <Container>
                Perfume from <Highlight>Cruella DeVil!</Highlight> Smell like a <Highlight>devillish woman!</Highlight> 
            </Container>
        </div>
    )
}

export default Annoucement;
