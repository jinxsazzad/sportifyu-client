import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import axios from "axios";

import { HomePageTittles } from "../../../components/Tittles/Tittles";
import { InstructorCard } from "../../../components/Cards/Cards";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState(null);
  useEffect(() => {
    axios
      .get("/instructors")
      .then((data) => setPopularInstructors(data.data));
  }, []);
  return (
    <section className="bg-[#FFFFFF]">
      <HomePageTittles
        tittle="[ Experienced Coaches ]"
        subTittle=" Most popular instructor are here !"
      />
      <div className="mx-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {popularInstructors?.map((ins) => (
            <SwiperSlide key={ins._id} className="pb-10">
              <InstructorCard ins={ins} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularInstructors;
