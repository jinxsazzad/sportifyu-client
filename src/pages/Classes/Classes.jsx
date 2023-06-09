import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

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
      // console.log(classUpdateField);

      axios
        .patch(`/classes/update-student/${_id}`, classUpdateField)
        .then((data) => console.log(data.data));
      axios.post(`/students-classes`, classByStudent).then(data=>console.log(data.data));
    }
  }, [cls]);

  return (
    <div>
      <div className=" mx-auto h-full">
        <div className="grid grid-cols-4 gap-2 p-2">
          {allClasses?.map((cls) => (
            <div
              key={cls._id}
              className={`border-4 my-6 ${
                cls.availableSeats === 0 ? "border-red-600" : "border-gray-400"
              }`}
            >
              <div className="card pt-4 rounded-md shadow-xl  bg-white">
                <figure>
                  <div className="avatar">
                    <div className="w-40 h-40">
                      <img src={cls.classPicture} />
                    </div>
                  </div>
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title">
                    {cls.className}
                    <span className="badge badge-secondary">New</span>
                  </h2>
                  <p>
                    Instructor:{cls.instructorName} <br />
                    Available seats: {cls.availableSeats} <br />
                    Price:{cls.classPrice}
                  </p>
                  <div className="card-actions">
                    <div
                      onClick={() => handleSelectClass(cls._id)}
                      className={`badge badge-secondary btn btn-xs rounded-full ${
                        user?.role === "student" ? "bg-white" : " disabled"
                      }`}
                    >
                      Select Class
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
