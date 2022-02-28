import styled from 'styled-components';
import { mediaQueries } from '../responsive';


export const Container = styled.div `
   height: 60px;
   ${mediaQueries("md")`
      height: 50px
   `}
`;

export const Wrapper = styled.div `
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${mediaQueries("md")`
      padding: "10px 0px"
   `}
`;

export const Left = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
`;

export const Language = styled.div `
   font-size: 1.2rem;
   cursor: pointer;
   ${mediaQueries("md")`
      display: none;
   `}
`;

export const SearchContainer = styled.div `
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
   ${mediaQueries("md")`
      margin-left: -10px;
      margin-top: -3px;
   `}
`;

export const Input = styled.input `
   flex: 1;
   border: none;
   ${mediaQueries("md")`
   width: 100px;
  `}
`;

export const Center = styled.div `
   flex: 1;
   text-align: center;
`;

export const Logo = styled.h1 `
   font-weight: bold;
   font-family: 'Shalimar', cursive;
   ${mediaQueries("md")`
      font-size: 18px;
      margin-top: 5px;
   `}
`;

export const Right = styled.div `
   flex: 1;
   display: flex;
   justify-content: flex-end;
   ${mediaQueries("md")`
      flex: 2,
   `}
`;

export const MenuItem = styled.div `
   font-size: 1rem;
   margin-top: 7px;
   cursor: pointer;
   margin-left: 25px;
   ${mediaQueries("md")`
      font-size: 12px;
      margin-left: 10px;
   `}
`;

export const Link = styled.li `
      
      font-size: 3rem;
      margin-top: 7px;
      cursor: pointer;
      margin-left: 25px;
   
   ${mediaQueries("md")`
      font-size: 12px;
      margin-left: 10px;
   `}
`;