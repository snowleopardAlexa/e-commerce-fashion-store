import styled from 'styled-components';
import { mediaQueries } from '../responsive';

export const Container = styled.div `
  height: 60vh;
  background-color: #880808;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

export const Title = styled.h1 `
  font-size: 4rem;
  margin-bottom: 20px;
  ${mediaQueries("md")`
      font-size: 3rem;
   `}
`;

export const Desc = styled.div `
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 300;
  ${mediaQueries("md")`
      font-size: 1.2rem;
      text-align: center;
   `}
`;

export const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const Input = styled.input `
  border: transparent;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button `
  flex: 1;
  border: transparent;
  color: white;
  background-color: black;
`;