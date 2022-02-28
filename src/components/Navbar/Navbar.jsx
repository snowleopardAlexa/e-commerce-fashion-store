import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Container, Wrapper, Logo, Left, Language, SearchContainer, Input, Center, Right, MenuItem, NavLink } from './NavbarStyles';
import { Link } from "react-router-dom";


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
                 <MenuItem><Link to="/">Home</Link></MenuItem> 
                 <MenuItem><Link to="/products">Products</Link></MenuItem> 
                 <MenuItem><Link to="/register">Register</Link></MenuItem> 
                 <MenuItem><Link to="/login">Login</Link></MenuItem> 
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