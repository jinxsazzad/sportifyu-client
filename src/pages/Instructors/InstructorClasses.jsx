import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ClassCard } from "../../components/Cards/Cards";
import { HomePageTittles } from "../../components/Tittles/Tittles";

const InstructorClasses = () => {
  const instructorClasses = useLoaderData();
  const { user } = useAuth();
  return (
    <>
      <HomePageTittles
        tittle="Classes By Your Instructor"
        subTittle="Find Your Favorite Class and Enroll"
      />
      <div className="grid grid-cols-4 p-4 gap-2">
        {instructorClasses?.map((cls) => (
          <ClassCard key={cls._id} cls={cls} user={user} />
        ))}
      </div>
    </>
  );
};

export default InstructorClasses;
