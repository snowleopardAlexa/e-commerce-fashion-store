import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
   height: 30px;
   background-color: red;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.2rem;
   font-family: 'Shalimar', cursive;
`

const Annoucement = () => {
    return (
        <div>
            <Container>
                Special Offer! Perfume from Cruella DeVille! Smell like a real devillish woman! 
            </Container>
        </div>
    )
}

export default Annoucement;
