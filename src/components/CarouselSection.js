import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import './styles/Carousel.css';

const CarouselSection = () => {
  const gradient1 = 'linear-gradient(to right, rgba(248, 187, 60, 0.7), rgba(165, 222, 252, 0.7))';
  const gradient2 = 'linear-gradient(to right, rgba(213, 55, 55, 0.7), rgba(208, 232, 244, 0.7))';
  const gradient3 = 'linear-gradient(to right, rgba(4, 196, 245, 0.7), rgba(32, 108, 60, 0.7))';

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <Carousel slide={true}>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero-bg.png"
              gradient={gradient1}
            >
              <h3>Understanding Climate Change</h3>
              <p>Explore the basics and science behind climate change and its impact on our planet.</p>
            </CarouselImage>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero2-bg.jpg"
              gradient={gradient2}
            >
              <h3>Renewable Energy Solutions</h3>
              <p>Discover the latest advancements in renewable energy and how they can help combat climate change.</p>
            </CarouselImage>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              image="/img/hero3-bg.jpg"
              gradient={gradient3}
            >
              <h3>Take Action</h3>
              <p>Learn how you can make a difference by adopting sustainable practices in your daily life.</p>
            </CarouselImage>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselSection;
