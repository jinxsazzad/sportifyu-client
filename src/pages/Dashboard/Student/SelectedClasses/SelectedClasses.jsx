import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
    const {user} = useAuth();
    const [selectedClass, setSelectedClass] = useState(null)
    useEffect(()=>{
        axios.get(`/student-classes/${user?.email}`).then(data =>setSelectedClass(data.data))
    },[user,])

    return (
        <div>
            <div className=" mx-auto h-full">
        <div className="grid grid-cols-4 gap-2 p-2">
          {selectedClass?.map((cls) => (
            <div
              key={cls._id}
              className={`border-4 my-6`}
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
                  </p>
                  <div className="card-actions">
                    <div
                      className={`badge badge-secondary btn btn-xs rounded-full`}
                    >
                      Delete
                    </div>
                    <div
                      className={`badge badge-secondary btn btn-xs rounded-full`}
                    >
                      <Link to={`/dashboard/student-payment/id/${cls.classID}`}>Enroll Now</Link>
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

export default SelectedClasses;