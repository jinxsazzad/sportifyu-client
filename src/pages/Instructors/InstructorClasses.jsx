import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ClassCard } from "../../components/Cards/Cards";

const InstructorClasses = () => {
  const instructorClasses = useLoaderData();
  const { user } = useAuth();
  return (
    <div className="grid grid-cols-4 p-4 gap-2 bg-primary">
      {instructorClasses?.map((cls) => (
        <ClassCard key={cls._id} cls={cls} user={user} />
      ))}
    </div>
  );
};

export default InstructorClasses;
