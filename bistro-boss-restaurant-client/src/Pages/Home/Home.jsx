import CallUs from "../../Components/CallUs/CallUs";
import Product from "../../Components/CardProduc/Product";
import Scoller from "../../Components/Scoll/Scoller";
import MenuItem from "../../Components/Shared/MenuItem";
import ShareTitle from "../../Components/Shared/ShareTitle";
import Slider from "../../Components/Shared/Slider";
import BoxFeatures from "../../Components/Shared/boxFeatures";
import ProductSlider from "../../Components/Shared/productSlider";
import Testimonial from "../../Components/Tesestimonial/Testimonial";
import boxImg from '../../assets/home/banner.jpg'

const Home = () => {
    return (
        <div>
           <div className="">
              <Slider ></Slider>
           </div>
           <ShareTitle title='---From 11:00am to 10:00pm---' hadingTitle='ORDER ONLINE'></ShareTitle>
           <div className=" max-w-screen-xl mx-auto">
            <ProductSlider></ProductSlider>
           </div>
            <div>
                <BoxFeatures img={boxImg} title='Bistro Boss' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'></BoxFeatures>
            </div>
            <ShareTitle title='---Should Try---' hadingTitle='CHEF RECOMMENDS'></ShareTitle>
            <MenuItem></MenuItem>
            <CallUs></CallUs>
            <ShareTitle title='---From 11:00am to 10:00pm---' hadingTitle='ORDER ONLINE'></ShareTitle>
            <Product></Product>
            <Scoller></Scoller>
            <ShareTitle title='---What Our Clients Say---' hadingTitle='TESTIMONIALS'></ShareTitle>
            <Testimonial></Testimonial>
        </div>
        
    );
};

export default Home;