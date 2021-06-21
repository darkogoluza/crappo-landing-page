import React from "react";
import {
  Container,
  Upper,
  UpperTitle,
  UpperDescription,
} from "./tradeElements";
import Calculate from "../Calculate";
import Cryptocurrencies from "../Cryptocurrencies";

const Trade = () => {
  return (
    <>
      <Container>
        <Upper>
          <UpperTitle>Check how much you can earn</UpperTitle>
          <UpperDescription>
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </UpperDescription>
        </Upper>
        <Calculate />
        <Cryptocurrencies />
      </Container>
    </>
  );
};

export default Trade;
