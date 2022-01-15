import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
   height: 60px;
`

const Wrapper = styled.div `
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
`

const Left = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
`
const Language = styled.div `
   font-size: 1.2rem;
   cursor: pointer;
`
const SearchContainer = styled.div `
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`

const Input = styled.input `
   flex: 1;
   border: none;
`

const Center = styled.div `
   flex: 1;
   text-align: center;
`

const Logo = styled.h1 `
   font-weight: bold;
   align-items: right;
   font-family: 'Shalimar', cursive;
`

const Right = styled.div `
   flex: 1;
   display: flex;
   justify-content: flex-end;
`

const MenuItem = styled.div `
   font-size: 14px;
   cursor: pointer;
   margin-left: 25px;
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
                      <Badge badgeContent={4} color="primary">
                          <ShoppingCartOutlined />
                      </Badge>
                   </MenuItem>
               </Right>
           </Wrapper>
        </Container>
    )
}

export default Navbar;
