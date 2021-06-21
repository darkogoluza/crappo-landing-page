import React from "react";
import {
  Container,
  Inputs,
  Input,
  DropDown,
  DropDownIcon,
  Button,
  Lower,
  Estimated,
  Value,
  Description,
  TitleHighLight,
} from "./calculateElements";
import dropDownIcon from "../../assets/arrow_down.png";

const Calculate = () => {
  return (
    <>
      <Container>
        <Inputs>
          <Input placeholder="Enter your hash rate" />
          <DropDown>
            TH/s <DropDownIcon src={dropDownIcon} />
          </DropDown>
          <Button>Calculate</Button>
        </Inputs>
        <Lower>
          <Estimated>ESTIMATED 24 HOUR REVENUE:</Estimated>
          <Value>
            0.055 130 59 ETH <TitleHighLight>($1275)</TitleHighLight>
          </Value>
          <Description>
            Revenue will change based on mining difficulty and Ethereum price.
          </Description>
        </Lower>
      </Container>
    </>
  );
};

export default Calculate;
