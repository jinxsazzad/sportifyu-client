import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState([]);

  


  useEffect(() => {
    axios
      .get(`/classes/email/${user?.email}`)
      .then((data) => setMyClasses(data.data));
  }, [user,myClasses]);
  const handleDeleteClass =id=>{
    axios.delete(`/classes/id${id}`).then(data=>console.log(data.data))
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>States</th>
              <th>Total Enrolled</th>
              <th>Feedback From</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses?.map((cls) => (
              <tr key={cls._id}>
                <td>
                  <h1>{cls.className} </h1>
                </td>
                <td>
                  <h3>{cls.status}</h3>
                </td>
                <td>
                  <h3>{cls.enrolledStudent} </h3>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs indicator">Admin<span className="indicator-item badge badge-secondary badge-xs p-[1px]"> {cls.adminFeedback.length} </span> </button>
                  <button className="btn btn-ghost btn-xs indicator">Student<span className="indicator-item badge badge-secondary badge-xs p-[1px]"> {cls.studentFeedback.length} </span> </button>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs"><Link to={`/dashboard/instructor-class-update/id/${cls._id}`}>Update</Link> </button>
                  <button className="btn btn-ghost btn-xs" onClick={()=>handleDeleteClass(cls._id)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
