import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set auto-play speed to 3 seconds
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="h-40 w-full rounded-md">
          <img className='rounded-md' src="/public/image/banner-01.jpg" alt="" />
        </div>
        <div className="h-40 w-full rounded-md">
            <img className='rounded-md' src="/public/image/banner-02.jpg" alt="" />
        </div>
        <div className="h-40 w-full rounded-md">
            <img className='rounded-md' src="/public/image/banner-03.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;