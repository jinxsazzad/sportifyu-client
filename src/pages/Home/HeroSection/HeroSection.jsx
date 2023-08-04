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
    <section className="lg:h-[80vh]">
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
            tittle="From Beginner to Pro"
            text="Embark on a transformative sports journey with SportifyU's online football and basketball courses. No matter your starting point, our comprehensive curriculum caters to players of all levels, from beginners to aspiring pros. Our certified coaches will be by your side, providing personalized guidance and continuous support as you progress. Join SportifyU today and witness the remarkable transformation of your skills, confidence, and passion for the game."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard
            img={imgTwo}
            tittle="Unleash Your Skills"
            text="Unlock your full potential on the field and court with SportifyU's immersive online football and basketball courses. Whether you're a beginner or a seasoned player, our expert coaches will guide you through comprehensive training modules, tactical insights, and personalized feedback, helping you elevate your game and dominate the competition. Join our community of athletes today and take your skills to the next level."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCard
            img={imgThree}
            tittle="Elevate Your Game"
            text="Ready to take your football and basketball skills to new heights? Look no further than SportifyU's top-notch online courses. From mastering the fundamentals to advanced techniques, we cover it all. Our courses feature dynamic video lessons, interactive drills, and strategic game analysis to ensure you grow as a well-rounded athlete. Start your journey with SportifyU and become the player you've always dreamed of being."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
