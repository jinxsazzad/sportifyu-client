import { useEffect, useState } from "react";

import axios from "axios";
import { HomePageTittles } from "../../../components/Tittles/Tittles";
import { PopularClassCard } from "../../../components/Cards/Cards";
import Loading from "../../../components/Loading/Loading";
import { CardBtn } from "../../../components/Buttons/Buttons";
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState(null);
  useEffect(() => {
    axios.get("/popular-classes/").then((data) => setPopularClasses(data.data));
  }, []);
  return (
    <section className="bg-[#F5F7F9] py-7">
      <HomePageTittles
        tittle="[ Popular Sport's Classes ]"
        subTittle="Most popular classes are here ! Enrol Now!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-1 px-10">
        {popularClasses? popularClasses.map((popularCls) => (
          <PopularClassCard key={popularCls._id} popularCls={popularCls} />
        )):<Loading></Loading>}
      </div>
      <div className="flex justify-center items-center my-5"><CardBtn text={"View full list"}/> </div>
    </section>
  );
};

export default PopularClasses;
