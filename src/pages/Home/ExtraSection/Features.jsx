import {
  FaBook,
  FaHouseUser,
  FaRegCheckSquare,
  FaRegSun,
} from "react-icons/fa";
import { HomePageTittles } from "../../../components/Tittles/Tittles";

const Features = () => {
  return (
    <section className="bg-[#F5F7F9]">
      <HomePageTittles
        tittle="Why You Should Choose Us"
      />
      <div className=" md:block lg:flex justify-center items-center text-justify">
        <div className="bg-[#da922c] p-6 flex  lg:flex-col lg:justify-center items-center gap-3">
          <FaBook className="text-5xl hover:animate-bounce"></FaBook>
          <h4 className="text-2xl font-semibold">Unique Classes</h4>
          <p className="hidden lg:block text-gray-700">
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
        <div className="bg-[#3b9db0] p-6 flex  lg:flex-col lg:justify-center items-center gap-3">
          <FaRegSun className="text-5xl hover:animate-bounce"></FaRegSun>
          <h4 className="text-2xl font-semibold">Full Day Session</h4>
          <p className="hidden lg:block text-gray-700">
            At SportSpark, we offer full-day preschool sessions built on a
            play-based approach for kids & adult.
          </p>
        </div>
        <div className="bg-[#F98F6F] p-6 flex  lg:flex-col lg:justify-center items-center gap-3">
          <FaRegCheckSquare className="text-5xl hover:animate-bounce"></FaRegCheckSquare>
          <h4 className="text-2xl font-semibold">
            Qualified Teachers
          </h4>
          <p className="hidden lg:block text-gray-700">
            Our team consists of experienced and creative teachers who are
            dedicated to your kids’ successful education.
          </p>
        </div>
        <div className="bg-[#9D87C3] p-6 flex  lg:flex-col lg:justify-center items-center gap-3">
          <FaHouseUser className="text-5xl hover:animate-bounce"></FaHouseUser>
          <h4 className=" text-2xl font-semibold">
            Quality Environment
          </h4>
          <p className="hidden lg:block text-gray-700">
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
