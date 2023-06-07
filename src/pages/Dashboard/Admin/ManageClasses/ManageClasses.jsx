import React from "react";

const ManageClasses = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-1 text-black bg-primary m-4 p-2">
        <div className=" col-span-4">NAofA Soccer Camp</div>
        <div className="avatar p-2 ">
          <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png" />
          </div>
        </div>
        <div className=" col-span-2"><h3>Name</h3>
        <p>
            Email: <br />
            Available Sets: <br />
            Price:
        </p>
        </div>
        <div><button>Approved</button><button>Deny</button><button>Feedback</button></div>
      </div>
      <div className="grid grid-cols-4 gap-1 text-black bg-primary m-4 p-2">
        <div className=" col-span-4">NAofA Soccer Camp</div>
        <div className="avatar p-2 ">
          <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/FHwb3Hg/Little-cute-minicom-png.png" />
          </div>
        </div>
        <div className=" col-span-2"><h3>Name</h3>
        <p>
            Email: <br />
            Available Sets: <br />
            Price:
        </p>
        </div>
        <div><button>Approved</button><button>Deny</button><button>Feedback</button></div>
      </div>
    </div>
  );
};

export default ManageClasses;
