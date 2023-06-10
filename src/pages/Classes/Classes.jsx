import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { OtherPageTittle } from "../../components/Tittles/Tittles";
import { FaSearch } from "react-icons/fa";
import { ClassCard } from "../../components/Cards/Cards";

const Classes = () => {
  const { user } = useAuth();
  const [allClasses, setAllClasses] = useState([]);
  const [cls, setCls] = useState(null);

  const handleSelectClass = (id) => {
    axios.get(`/classes/id/${id}`).then((data) => {
      setCls(data?.data);
    });
  };
  useEffect(() => {
    axios.get("/classes").then((data) => setAllClasses(data?.data));
  }, [cls, handleSelectClass]);

  useEffect(() => {
    if (cls) {
      const {
        _id,
        className,
        classPicture,
        instructorName,
        instructorEmail,
        selectedStudent,
        availableSeats,
      } = cls;

      const classUpdateField = {
        selectedStudent: selectedStudent + 1,
        availableSeats: availableSeats - 1,
      };
      const classByStudent = {
        classID: _id,
        className,
        classPicture,
        instructorName,
        instructorEmail,
        studentName: user?.displayName,
        studentEmail: user?.email,
        selected: true,
        enrolled: false,
      };

      console.log(classByStudent);

      axios
        .patch(`/classes/update-student/${_id}`, classUpdateField)
        .then((data) => console.log(data.data));
      axios
        .post(`/students-classes`, classByStudent)
        .then((data) => console.log(data.data));
    }
  }, [cls]);

  return (
    <div>
      <OtherPageTittle
        tittle="[ Select - Enroll - Trained Yourself ]"
        subTittle=" Our All Classes are here "
      />
      <div className=" mx-auto h-full">
        <div className=" pt-5 flex items-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-r-lg"
          >
            <FaSearch></FaSearch>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 p-4">
          {allClasses?.map((cls) => (
            <ClassCard
              key={cls._id}
              cls={cls}
              user={user}
              handleSelectClass={handleSelectClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
