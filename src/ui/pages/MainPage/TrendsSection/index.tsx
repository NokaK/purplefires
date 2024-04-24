import { TrendsSectionWrapper } from "./TrendsSectionStyles";
import SubscribeBlock from "./SubscribeBlock";
import Slider from "./Slider";

const TrendsSection = () => {
  return (
    <TrendsSectionWrapper>
      <div className="container">
        <SubscribeBlock />
      </div>
      <Slider />
    </TrendsSectionWrapper>
  );
};

export default TrendsSection;
