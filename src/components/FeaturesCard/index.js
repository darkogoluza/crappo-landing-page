import React from "react";
import {
  Container,
  Title,
  Description,
  Button,
  Image,
} from "./featuresCardElements";
import theme from "../../theme";

const FeaturesCard = ({ src, title, description, isReversed = false }) => {
  const newStyles = {
    flexDirection: `${isReversed ? "row-reverse" : "row"}`,
    padding: `${
      isReversed ? `0 ${theme.sidePadding} 0 0` : `0 ${theme.sidePadding}`
    }`,
  };
  return (
    <>
      <Container style={newStyles}>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>Learn More</Button>
        </div>

        <Image src={src} />
      </Container>
    </>
  );
};

export default FeaturesCard;
