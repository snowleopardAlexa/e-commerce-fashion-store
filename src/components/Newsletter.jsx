import React from 'react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div `
  height: 60vh;
  background-color: #880808;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const Title = styled.h1 `
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Desc = styled.div `
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 300;
`;

const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const Input = styled.input `
  border: transparent;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button `
  flex: 1;
  border: transparent;
  color: white;
  background-color: black;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
                <Desc>Get timely updates from your favorite products.</Desc>
                <InputContainer>
                  <Input placeholder="Your email" />
                  <Button>
                      <Send />
                  </Button>
                </InputContainer>
        </Container>
    )
}

export default Newsletter;
