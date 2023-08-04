import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import HeroSliderCard from "../../../components/HeroSection/HeroSliderCard";

const imgOne = "https://i.ibb.co/3cQNLf8/t3pvlh3rsojloi2jeqnnpjpp9u.png";
const imgTwo =
  "https://i.ibb.co/0XL8R53/mls-football-player-athlete-football-fd298b7129055256f8f01e40e1845fdb.png";
const imgThree =
  "https://i.ibb.co/TR4JcNk/toppng-com-basketball-camps-player-kid-basketball-player-350x433.png";

const HeroSection = () => {
  return (
    <section className="h-[80vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        // className="h-[20rem] md:h-[30.5rem] "
      >
        <SwiperSlide>
          <HeroSliderCard
            img={imgOne}
            tittle="Grow UP With Football !"
            text="We guide and train student at the age of 5."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard
            img={imgTwo}
            tittle="Get Professional Classes!"
            text="Provident cupiditate voluptatem et in."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard
            img={imgThree}
            tittle="Hey It's Basketball !"
            text="Provident cupiditate voluptatem et in."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
