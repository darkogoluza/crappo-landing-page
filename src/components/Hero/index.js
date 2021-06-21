import React from "react";
import NavBar from "../NavBar";
import {
  Container,
  Wrapper,
  Info,
  InfoText,
  InfoSave,
  Image,
  Title,
  Description,
  Button,
  ButtonIcon,
} from "./heroElements";
import buttonIcon from "../../assets/button_icon.png";
import image from "../../assets/hero_img.png";

const Hero = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Wrapper>
          <div>
            <Info>
              <InfoSave>75% SAVE</InfoSave>
              <InfoText>For the Black Friday weekend</InfoText>
            </Info>
            <Title>
              Fastest & secure
              <br /> platform to invest
              <br /> in crypto
            </Title>
            <Description>
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </Description>
            <Button>
              Try For FREE <ButtonIcon src={buttonIcon} />
            </Button>
          </div>
          <Image src={image} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Hero;
