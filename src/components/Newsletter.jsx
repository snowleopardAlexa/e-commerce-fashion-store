import React from 'react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div `

`;

const Title = styled.h1 `

`;

const Desc = styled.div `

`;

const InputContainer = styled.div `

`;

const Input = styled.input `

`;

const Button = styled.button `

`;

const Newsletter = () => {
    return (
        <Container>
            <Title>
                <Desc></Desc>
                <InputContainer>
                  <Input />
                  <Button>
                      <Send />
                  </Button>
                </InputContainer>
            </Title>
        </Container>
    )
}

export default Newsletter;
