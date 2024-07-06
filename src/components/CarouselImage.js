import PropTypes from 'prop-types';

const CarouselImage = ({ children, image, gradient }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`,
    position: 'relative',
    color: '#fff',
  };

  const gradientStyle = {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '20px 40px',
    background: gradient,
    borderRadius: '5px',
    textAlign: 'center',
    maxWidth: '80%',
  };

  return (
    <div style={containerStyle}>
      <div style={gradientStyle} className="carousel-caption">
        {children}
      </div>
    </div>
  );
};

CarouselImage.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
};

export default CarouselImage;
