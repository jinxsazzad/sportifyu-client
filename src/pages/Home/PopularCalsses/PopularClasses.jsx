import { useEffect, useState } from "react";

import axios from "axios";
import { HomePageTittles } from "../../../components/Tittles/Tittles";
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState(null);
  useEffect(() => {
    axios.get("/popular-classes/").then((data) => setPopularClasses(data.data));
  }, []);
  return (
    <div>
      <HomePageTittles
        tittle="[ Popular Sport's Classes ]"
        subTittle="Most popular classes are here ! Enrol Now!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-1 px-10">
        {popularClasses?.map((cls) => (
          <div
            key={cls._id}
            className="card shadow-xl bg-primary rounded-md hover:shadow-none"
          >
            <figure className="inline-block border-b-2 border-white">
              <img
                className="h-56 w-56 transition-transform transform hover:scale-150 p-2 "
                src={cls.classPicture}
                alt=""
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">
                {cls.className}
                <div className="badge badge-ghost ms-2 ">Popular</div>
              </h2>
              <h5 className=" text-lg font-semibold">
                Instructor: {cls?.instructorName}
              </h5>
              <p className=" text-sm">{cls.classDescription}</p>
              <div className="card-actions justify-center">
                <div className=" btn btn-sm bg-orange-500 text-black hover:bg-black hover:text-white">
                  Select Now
                </div>
                <div className=" btn btn-sm bg-orange-500 text-black hover:bg-black hover:text-white">
                  Select Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
