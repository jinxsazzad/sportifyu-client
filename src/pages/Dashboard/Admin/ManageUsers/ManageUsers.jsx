import React from "react";

const ManageUsers = () => {
  return (
    <div>
      <div className="overflow-x-auto p-6 text-black">
        <table className="table text-black">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Admin
              </td>
              <td>
                <button className="btn btn-secondary btn-xs">Admin</button>
                <button className="btn btn-secondary btn-xs">Instructor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
