import React, { useEffect, useState } from "react";
import { makeAdmin, makeInstructor } from "../../../../api/auth";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setAllUsers(res.data));
  }, [allUsers]);
  return (
    <div>
      <HomePageTittles tittle="Every User" subTittle="Set user role" />
      <div className="overflow-x-auto p-6 text-black">
        <table className="table text-black">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th className="font-bold text-lg w-fit">Name</th>
              <th className="font-bold text-lg">Role</th>
              <th className="font-bold text-lg text-center">Change Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allUsers?.map((users) => (
              <tr>
                <td>
                  <div>
                    <div className="font-bold">{users.name}</div>
                    <p>{users.email}</p>
                  </div>
                </td>
                <td>{users.role}</td>
                <td className=" text-center">
                  <button
                    className="btn btn-secondary btn-xs me-3"
                    onClick={() => makeAdmin(users)}
                  >
                    Admin
                  </button>
                  <button
                    className="btn btn-secondary btn-xs"
                    onClick={() => makeInstructor(users)}
                  >
                    Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
