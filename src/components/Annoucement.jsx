import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
   height: 30px;
   background-color: teal;
   color: white;
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
