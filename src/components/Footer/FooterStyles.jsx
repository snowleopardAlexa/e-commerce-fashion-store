import styled from "styled-components";
import { mediaQueries } from '../responsive';
//import { motion } from 'framer-motion';


export const Container = styled.div `
  display: flex;
  ${mediaQueries("md")`
      flex-direction: column;
   `}
`;

export const Left = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1 `
 ${mediaQueries("md")`
   font-size: 1.5rem;
`}
`;

export const Desc = styled.p `
  margin 20px 0px;
`;

export const SocialContainer = styled.div `
  display: flex;
`;

export const SocialIcon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div `
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3 `
  margin-bottom: 30px;
`;

export const List = styled.div `
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li `
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div `
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div `
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const PaymentContainer = styled.div `
  width: 50%;
`;

export const PaymentIcon = styled.img `
  width: 40px;
  height: 40px;
  margin-left: 10px;
  ${mediaQueries("md")`
      width: 30px;
      height: 30px;
   `}
`;


