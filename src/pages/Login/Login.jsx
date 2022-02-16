import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Wrapper, Title, Form, Input, Button, Link } from './LoginStyles';


const Login = () => {
    return (
    <>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Button>LOGIN with Facebook</Button>
          <Button>LOGIN with Email</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
        </Container>
        <Footer />
        </>
    )
}

export default Login;
