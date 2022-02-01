import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../responsive';

const Container = styled.div `
   height: 60px;
   ${mediaQueries("md")`
      height: 50px
   `}
`;

const Wrapper = styled.div `
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${mediaQueries("md")`
      padding: "10px 0px"
   `}
`;

const Left = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
`;

const Language = styled.div `
   font-size: 1.2rem;
   cursor: pointer;
   ${mediaQueries("md")`
      display: none;
   `}
`;

const SearchContainer = styled.div `
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

const Input = styled.input `
   flex: 1;
   border: none;
   ${mediaQueries("md")`
   width: 100px;
  `}
`;

const Center = styled.div `
   flex: 1;
   text-align: center;
`;

const Logo = styled.h1 `
   font-weight: bold;
   font-family: 'Shalimar', cursive;
   ${mediaQueries("md")`
      font-size: 18px;
      margin-top: 5px;
   `}
`;

const Right = styled.div `
   flex: 1;
   display: flex;
   justify-content: flex-end;
   ${mediaQueries("md")`
      flex: 2,
   `}
`;

const MenuItem = styled.div `
   font-size: 1rem;
   margin-top: 7px;
   cursor: pointer;
   margin-left: 25px;
   ${mediaQueries("md")`
      font-size: 12px;
      margin-left: 10px;
   `}
`;

const Navbar = () => {
    return (
        <Container>
           <Wrapper>
               <Left>
                   <Language>EN</Language>
                   <SearchContainer>
                       <Input placeholder="Search" />
                       <Search style={{color: 'grey', fontSize: '1.2rem'}} />
                   </SearchContainer>
               </Left>
               <Center>
                   <Logo>Cruella DeVil</Logo>
               </Center>
               <Right>
                   <MenuItem>Register</MenuItem>
                   <MenuItem>Login</MenuItem>
                   <MenuItem>
                      <Badge badgeContent={4} color="secondary">
                          <ShoppingCartOutlined />
                      </Badge>
                   </MenuItem>
               </Right>
           </Wrapper>
        </Container>
    )
}

export default Navbar;
