import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
const Testimonial = () => {
    const [review ,setReview] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setReview(data)
        })
    },[])
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        allowClick={true}

      >


     {
        review?.map(reviw =>(
            <SwiperSlide key={reviw._id}>
                <div className=" border-2 p-5">
                <Rating name="half-rating-read" defaultValue={reviw.rating} precision={0.5} readOnly />
                    <p>{reviw.details.slice(0,100)}</p>
                    <h1 className="text-2xl font-bold">{reviw?.name}</h1>
                </div>
            </SwiperSlide>
        ))
     }

      </Swiper>
    </div>
  );
};

export default Testimonial;
