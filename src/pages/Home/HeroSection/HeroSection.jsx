import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
const bgURL = "https://i.ibb.co/BGmfvM9/Banners-01-min-1200x400.jpg";
const HeroSection = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 5000 }} // Set autoplay delay in milliseconds
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className="hero min-h-screen bg-primary text-white px-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/3cQNLf8/t3pvlh3rsojloi2jeqnnpjpp9u.png"
                className="max-w-sm"
              />
              <div>
                <h1 className="text-5xl font-bold">Start Training At Little Age !</h1>
                <p className="py-6">
                  We guide and train student at the age of 5. 
                </p>
                <button className="btn btn-outlet hover:bg-none">See Classes</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen bg-primary text-white px-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/0XL8R53/mls-football-player-athlete-football-fd298b7129055256f8f01e40e1845fdb.png"
                className="max-w-sm"
              />
              <div>
                <h1 className="text-5xl font-bold">Get Professional Classes!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-outlet">See Classes</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen bg-primary text-white px-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/TR4JcNk/toppng-com-basketball-camps-player-kid-basketball-player-350x433.png"
                className="max-w-sm"
              />
              <div>
                <h1 className="text-5xl font-bold">Hey It's Basketball !</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-black text-white">See Classes</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
