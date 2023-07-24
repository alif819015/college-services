import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import SectionContainer from "../SectionContainer/SectionContainer";
import SwipeSlide from "./Swiper/SwipeSlide";

const Home = () => {
  return (
    <SectionContainer>
      <div>
        <SwipeSlide></SwipeSlide>
        <Card></Card>
        <h3 className="text-center text-3xl font-bold uppercase my-8">
          gallery
        </h3>
        <Gallery></Gallery>
      </div>
    </SectionContainer>
  );
};

export default Home;
