import React from "react";
import {
  Container,
  Numbers,
  NumbersIcon,
  NumbersTitle,
  NumbersDescription,
  NumbersList,
  Content,
  Image,
  Title,
  Description,
  Button,
} from "./infoElements";
import numbersIcon1 from "../../assets/numbers_icon_1.png";
import numbersIcon2 from "../../assets/numbers_icon_2.png";
import numbersIcon3 from "../../assets/numbers_icon_3.png";
import image from "../../assets/info_image.png";
import infoBackground from "../../assets/info_bg.png";

const Info = () => {
  return (
    <>
      <Container src={infoBackground}>
        <NumbersList>
          <Numbers>
            <NumbersIcon src={numbersIcon1} />
            <div>
              <NumbersTitle>$30B</NumbersTitle>
              <NumbersDescription>
                Digital Currency Exchanged
              </NumbersDescription>
            </div>
          </Numbers>
          <Numbers>
            <NumbersIcon src={numbersIcon2} />
            <div>
              <NumbersTitle>10M+</NumbersTitle>
              <NumbersDescription>Trusted Wallets Investor</NumbersDescription>
            </div>
          </Numbers>
          <Numbers>
            <NumbersIcon src={numbersIcon3} />
            <div>
              <NumbersTitle>195</NumbersTitle>
              <NumbersDescription>Countries Supported</NumbersDescription>
            </div>
          </Numbers>
        </NumbersList>

        <Content>
          <Image src={image} />
          <div>
            <Title>Why you should choose CRAPPO</Title>
            <Description>
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </Description>
            <Button>Learn More</Button>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Info;
