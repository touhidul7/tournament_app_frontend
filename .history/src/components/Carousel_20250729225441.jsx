import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({settings}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="max-w-sm mx-auto">
      <Slider {...settings}>
        <div className="h-40 rounded-md">
          <img className='rounded-md' src="./image/banner-01.jpg" alt="" />
        </div>
        <div className="h-40 rounded-md">
            <img className='rounded-md' src="./image/banner-02.jpg" alt="" />
        </div>
        <div className="h-40 rounded-md">
            <img className='rounded-md' src="./image/banner-03.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;