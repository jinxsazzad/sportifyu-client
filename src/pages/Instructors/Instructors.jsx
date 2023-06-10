import React, { useEffect, useState } from "react";
import axios from "axios";
import { OtherPageTittle } from "../../components/Tittles/Tittles";
import { FaSearch } from "react-icons/fa";
import { InstructorCard } from "../../components/Cards/Cards";

const Instructors = () => {
  const role = "instructor";
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get(`/users/role/${role}`).then((data) => setInstructors(data.data));
  }, [role]);

  return (
    <section>
      <OtherPageTittle
        tittle="[ Experienced - Friendly - Professional ]"
        subTittle=" Find Your Perfect Instructors "
      />
      <div className="bg-primary">
        <div className=" pt-5 flex items-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-r-lg"
          >
            <FaSearch></FaSearch>
          </button>
        </div>
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mx-20 py-5 "
          >
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
            <InstructorCard
              ins={instructor}
              link={`/instructor-all-class/${instructor.email}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
