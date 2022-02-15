import styled from 'styled-components';
import { mediaQueries } from '../responsive';

export const Container = styled.div `
   height: 30px;
   background-color: #880808;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.3rem;
   font-family: 'Poppins', sans-serif;
   height: 60px;
   ${mediaQueries("md")`
      font-size: 14px;
   `}
`;

export const Highlight = styled.div `
   font-family: 'Shalimar', cursive;
   font-size: 2rem;
   padding: 15px;
   ${mediaQueries("md")`
      font-size: 16px
   `}
`;