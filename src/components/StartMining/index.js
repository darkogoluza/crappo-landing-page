import React from "react";
import {
  Contianer,
  Content,
  Title,
  Description,
  Input,
  Button,
  Wrapper,
} from "./startMiningElements";
import background from "../../assets/start_mining_bg.png";
import mainBackground from "../../assets/start_mining_main_bg.png";

const StartMining = () => {
  return (
    <>
      <Contianer src={mainBackground}>
        <Content src={background}>
          <div>
            <Title>Start mining now</Title>
            <Description>
              Join now with CRAPPO to get the latest news and start mining now
            </Description>
          </div>
          <Wrapper>
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </Wrapper>
        </Content>
      </Contianer>
    </>
  );
};

export default StartMining;
