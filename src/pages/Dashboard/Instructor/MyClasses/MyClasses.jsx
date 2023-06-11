import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`/classes/email/${user?.email}`)
      .then((data) => setMyClasses(data.data));
  }, [user, myClasses]);
  const handleDeleteClass = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      axios.delete(`/classes/id/${id}`).then((data) => {
        
        if (result.isConfirmed && data.data.acknowledged === true) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        console.log(data.data)});
      
    })

    
  };
  return (
    <div>
      <HomePageTittles tittle="Your Added Classes" subTittle="Edit - Delete - Many more" />
      {myClasses.map((cls) => (
        <div className="flex justify-between items-center mx-6 bg-slate-50 mb-2 px-5 py-2">
          <div>
            <h3 className="font-semibold text-lg">{cls.className}</h3>
            <p className="py-2">Status: <span className=" badge badge-primary font-semibold">{cls.status}</span></p>
            <p>Enrolled Student:{cls.enrolledStudent}</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg">Feedback</h3>
            <p className="text-sm font-medium text-gray-600">{cls.adminFeedback}</p>
          </div>
          <div>
            <button className="white hover:text-white btn btn-sm btn-outline bg-orange-500 hover:bg-black ">
              <Link to={`/dashboard/instructor-class-update/id/${cls._id}`}>
                Update
              </Link>{" "}
            </button>
            <button
              className="white hover:text-white btn btn-sm btn-outline bg-orange-500 hover:bg-black "
              onClick={() => handleDeleteClass(cls._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
