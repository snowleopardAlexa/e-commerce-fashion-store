import styled from 'styled-components';
import { mediaQueries } from '.././responsive';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #880808;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: white;
  ${mediaQueries("md")`
      width: 85%;
   `}
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 10px 0;
  padding: 20px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #880808;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Divider = styled.div `
  padding: 5px;
`;

export const BottomText = styled.p `
  font-size: 2.5rem;
  font-family: 'Shalimar', cursive;
  position: absolute;
  left: 0;
  right: 0;
  margin: -110px auto;
  text-align: center;
  color: #eef2f3;
`;