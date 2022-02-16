import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Container, Wrapper, Logo, Left, Language, SearchContainer, Input, Center, Right, MenuItem } from './NavbarStyles';


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
                   <MenuItem>Home</MenuItem>
                   <MenuItem>Products</MenuItem>
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