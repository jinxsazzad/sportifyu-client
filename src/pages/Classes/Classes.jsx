import React from "react";

const Classes = () => {
    const classes = ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',]
    const bg = false
  return (
    <div>
      <div className="grid grid-cols-5">
        {classes.map(cls=><div className={`border-4 indicator my-6 ${bg===true?'border-black':'border-red-400'}`}>
          <span className="indicator-item indicator-center badge badge-secondary w-20 h-6">100 $</span>
          <div className="card rounded-md shadow-xl text-black bg-white">
            <figure>
              <div className="avatar">
                <div className="w-40 h-40">
                  <img src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png" />
                </div>
              </div>
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title">
                Class Name
                <span className="badge badge-secondary">New</span>
              </h2>
              <p>Instructor Name <br />
              Available seats:
              </p>
              <div className="card-actions">
                <div className="badge badge-outline btn btn-xs rounded-full">
                  See classes
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Classes;
