import { Container, BrandSignatureWrapper, TitleWrapper, TextWrapper } from './BrandSignatureStyles';

const BrandSignature = () => {
  return (
    <Container>
        <BrandSignatureWrapper>
            <TitleWrapper>
               Cruela DeVil says...
            </TitleWrapper>
            <TextWrapper>
                The woman is a monster! 
            </TextWrapper>
        </BrandSignatureWrapper>
    </Container>
  )
}

export default BrandSignature;