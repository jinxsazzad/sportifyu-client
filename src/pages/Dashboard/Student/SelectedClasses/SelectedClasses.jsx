import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { MyClassCard } from "../../../../components/Cards/Cards";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState(null);
  const [cls,setCls] =useState()
  const handleDeleteClass = (id) => {
    axios.delete(`/student-classes/id/${id}`).then((data) => {
      if (data.data.acknowledge === true) {
        toast.success("Successfully deleted");
      }
      console.log(data.data);
    });
  };

  const handlePayment = async (studentID, classID) => {
    console.log(classID, studentID);
      await axios.get(`/classes/id/${classID}`).then(data=>setCls(data.data))
      console.log(cls);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      axios.delete(`/classes/id/${id}`).then((data) => {
        if (result.isConfirmed && data.data.acknowledged === true) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        console.log(data.data);
      });
    });
  };

  useEffect(() => {
    axios.get(`/student-classes/${user?.email}`).then((data) => {
      setSelectedClass(data.data), console.log(data.data);
    });
  }, []);

  return (
    <div>
      <div className=" mx-auto h-full">
        <HomePageTittles
          tittle="Your Selected Classes"
          subTittle="For enroll the class please complete PAYMENT"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {selectedClass?.map((cls) => (
            <MyClassCard
              key={cls._id}
              cls={cls}
              user={user}
              handleDeleteClass={handleDeleteClass}
              handlePayment={handlePayment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
