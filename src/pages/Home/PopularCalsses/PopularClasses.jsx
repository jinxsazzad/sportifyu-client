import { useEffect, useState } from "react";

import axios from "axios";
import { HomePageTittles } from "../../../components/Tittles/Tittles";
import { PopularClassCard } from "../../../components/Cards/Cards";
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState(null);
  useEffect(() => {
    axios.get("/popular-classes/").then((data) => setPopularClasses(data.data));
  }, []);
  return (
    <section>
      <HomePageTittles
        tittle="[ Popular Sport's Classes ]"
        subTittle="Most popular classes are here ! Enrol Now!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-1 px-10">
        {popularClasses?.map((popularCls) => (
          <PopularClassCard key={popularCls._id} popularCls={popularCls} />
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
