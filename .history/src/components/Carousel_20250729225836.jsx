import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ appSettings }) => {
  const IMAGE_URL = import.meta.env.VITE_API_IMAGE_URL;
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
        {appSettings.banner_1 &&
          <div className="h-40 rounded-md">
            <img className='rounded-md' src={`${IMAGE_URL}/${settings.banner_1}`} alt="" />
          </div>
        }
        {appSettings.banner_2 &&
          <div className="h-40 rounded-md">
            <img className='rounded-md' src={`${IMAGE_URL}/${settings.banner_2}`} alt="" />
          </div>
        }
        {appSettings.banner_3 &&
          <div className="h-40 rounded-md">
            <img className='rounded-md' src={`${IMAGE_URL}/${settings.banner_3}`} alt="" />
          </div>
        }
        {appSettings.banner_4 &&
          <div className="h-40 rounded-md">
            <img className='rounded-md' src={`${IMAGE_URL}/${settings.banner_4}`} alt="" />
          </div>
        }
        
      </Slider>
    </div>
  );
};

export default Carousel;