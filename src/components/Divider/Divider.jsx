import React from 'react';
import styled from 'styled-components';
import lips from './lips.png';

export const DividerCon = styled.div `

`;

export const Image = styled.img `
width: 300px;
height: 300px;
display: flex;
margin: 0 auto;
`;


const Divider = () => {
  return (
    <>
      <DividerCon>
          <Image src={lips} alt="" />
      </DividerCon>
    </>
  )
}

export default Divider;