import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import './custom-carousel.css'

import sliderImg1 from '../../assets/home/01.jpg'
import sliderImg2 from '../../assets/home/02.jpg'
import sliderImg3 from '../../assets/home/03.png'
import sliderImg4 from '../../assets/home/04.jpg'
import sliderImg5 from '../../assets/home/05.png'



const Slider = () => {
  const onChange = (index) => {
    console.log(`Selected index: ${index}`);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked item: ${item}`);
  };

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumb: ${item}`);
  };

  return (
    <Carousel
    infiniteLoop={true}
    showArrows={true}
    onChange={onChange} 
    onClickItem={onClickItem}
    onClickThumb={onClickThumb}
    thumbWidth={100}
    >
      <div className='h-[600px]'>
        <img className='w-full h-full' src={sliderImg1} alt="Image 1" />

      </div >
      <div  className='h-[600px]'>
        <img className='w-full h-full' src={sliderImg2} alt="Image 2" />
      </div>
      <div className='h-[600px]'>
        <img className='w-full h-full' src={sliderImg3} alt="Image 2" />
      </div>
      <div className='h-[600px]'>
        <img className='w-full h-full' src={sliderImg4} alt="Image 2" />
      </div>
      <div className='h-[600px]'>
        <img className='w-full h-full' src={sliderImg5} alt="Image 2" />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default Slider;
