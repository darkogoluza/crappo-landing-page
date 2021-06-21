import React from "react";
import {
  Container,
  Title,
  CardList,
  MainCard,
  Icon,
  MainDescription,
  Description,
  MainCardTitle,
  CardTitle,
  MainButton,
  Button,
  ButtonIcon,
  CardTitleSpecific,
  MainCardTitleSpecific,
  Card,
} from "./cryptocurrenciesElements";
import icon1 from "../../assets/card_icon1.png";
import icon2 from "../../assets/card_icon2.png";
import icon3 from "../../assets/card_icon3.png";
import buttonIcon from "../../assets/button_icon.png";
import button from "../../assets/button_arrow.png";

const Cryptocurrencies = () => {
  return (
    <>
      <Container>
        <Title>
          Trade securely and market the high growth cryptocurrencies.
        </Title>

        <CardList>
          <MainCard>
            <Icon src={icon1} />
            <MainCardTitle>
              Bitcoin <MainCardTitleSpecific>BTC</MainCardTitleSpecific>
            </MainCardTitle>

            <MainDescription>
              Digital currency in which a record of transactions is maintained.
            </MainDescription>
            <MainButton>
              Star mining <ButtonIcon src={buttonIcon} />
            </MainButton>
          </MainCard>
          <Card>
            <Icon src={icon2} />
            <CardTitle>
              Ethereum <CardTitleSpecific>ETH</CardTitleSpecific>
            </CardTitle>

            <Description>
              Blockchain technology to create and run decentralized digital
              applications.
            </Description>
            <Button src={button} />
          </Card>
          <Card>
            <Icon src={icon3} />
            <CardTitle>
              Litecoin <CardTitleSpecific>LTC</CardTitleSpecific>
            </CardTitle>

            <Description>
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </Description>
            <Button src={button} />
          </Card>
        </CardList>
      </Container>
    </>
  );
};

export default Cryptocurrencies;
