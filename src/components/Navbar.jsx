import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
   height: 60px;
   ${mobile({height: '50px'})}
`;

const Wrapper = styled.div `
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   ${mobile({padding: '10px 0px'})}
`;

const Left = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
`;

const Language = styled.div `
   font-size: 1.2rem;
   cursor: pointer;
   ${mobile({display: 'none'})}
`;

const SearchContainer = styled.div `
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`;

const Input = styled.input `
   flex: 1;
   border: none;
   ${mobile({width: '50px'})}
`;

const Center = styled.div `
   flex: 1;
   text-align: center;
`;

const Logo = styled.h1 `
   font-weight: bold;
   align-items: right;
   font-family: 'Shalimar', cursive;
   ${mobile({fontSize: '24px'})}
`

const Right = styled.div `
   flex: 1;
   display: flex;
   justify-content: flex-end;
   ${mobile({flex: 2, justifyContent: 'center'})}
`;

const MenuItem = styled.div `
   font-size: 1rem;
   margin-top: 7px;
   cursor: pointer;
   margin-left: 25px;
   ${mobile({fontSize: '12px', marginLeft: '10px'})}
`

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
                   <MenuItem>SIGN IN</MenuItem>
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
