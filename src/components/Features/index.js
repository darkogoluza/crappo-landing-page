import React from "react";
import { Container, Title, CardsList } from "./featuresElements";
import FeaturesCard from "../FeaturesCard";
import featuresImage1 from "../../assets/features_image1.png";
import featuresImage2 from "../../assets/features_image2.png";
import featuresImage3 from "../../assets/features_image3.png";
import background from "../../assets/features_bg.png";

const Features = () => {
  return (
    <>
      <Container src={background}>
        <Title>
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </Title>

        <CardsList>
          <FeaturesCard
            src={featuresImage1}
            title="Invest Smart"
            description="Get full statistic information about the behaviour of buyers and sellers will help you to make the decision."
          />
          <FeaturesCard
            src={featuresImage2}
            title="Detailed Statistics"
            description="View all mining related information in realtime, at any point at any location and decide which polls you want to mine in."
            isReversed={true}
          />
          <FeaturesCard
            src={featuresImage3}
            title="Grow your profit and track your investmentsInvest Smart"
            description="Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments."
          />
        </CardsList>
      </Container>
    </>
  );
};

export default Features;
