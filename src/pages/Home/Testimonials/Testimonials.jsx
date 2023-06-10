import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HomePageTittles } from "../../../components/Tittles/Tittles";
import { Pagination, Navigation, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section>
      <HomePageTittles
        tittle="[ Checkout Testimonials ]"
        subTittle=" Most recent testimonials are here !"
      />
      <div className="bg-primary">
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
          {testimonials.map((message) => (
            <SwiperSlide key={0}>
              <div className=" md:mx-12 lg:mx-48 my-4 md:my-6">
                <div className="card w-auto rounded-md shadow-xl text-black h-full bg-white">
                  <figure className="mt-4">
                    <div className="avatar border-4 border-orange-600 rounded-full p-2 ">
                      <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png" />
                      </div>
                    </div>
                  </figure>
                  <div className="card-body flex justify-center items-center">
                    <h2 className="card-title">
                      {"instructor.name"}
                      <span className="badge badge-secondary">5 days ago</span>
                    </h2>
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p>
                      <FaQuoteLeft></FaQuoteLeft>
                      As a parent, I entrust my greatest blessing to the staff
                      at Kinderex every day. The teachers and director look at
                      each child as an individual, with their own strengths and
                      needs. Marta Stewart Client 2 days ago My son started at
                      Kinderex at the beginning of the year.
                      <span className=" flex justify-end">
                        <FaQuoteRight></FaQuoteRight>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
