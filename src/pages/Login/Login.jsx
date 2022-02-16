import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BrandSignature from '../../components/BrandSignature/BrandSignature';
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Divider,
} from "./LoginStyles";

const Login = () => {
  return (
    <>
      <Navbar />
      <BrandSignature />
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="email" />
            <Divider />
            <Input placeholder="password" />
            <Divider />
            <Button>LOGIN</Button>
            <Divider />
            <Button>LOGIN with Facebook</Button>
            <Divider />
            <Button>LOGIN with Email</Button>
            <Divider />
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
