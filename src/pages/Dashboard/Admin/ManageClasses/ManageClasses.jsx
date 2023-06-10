import axios from "axios";
import React, { useEffect, useState } from "react";
import { updateClassStatus, updateFeedback } from "../../../../api/classes";
import { toast } from "react-hot-toast";
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [allClasses, setAllClasses] = useState(null);
  useEffect(() => {
    axios.get("/classes").then((res) => setAllClasses(res.data));
  }, [allClasses]);

  const handleFeedback= async (id)=>{
    const feedbackId = 'admin'

    const { value: feedbackText } = await Swal.fire({
      title: 'Enter Feedback',
      input: 'text',
      inputPlaceholder: 'Enter your feedback',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Submit',
      inputValidator: (value) => {
        if (!value) {
          return 'Feedback cannot be empty';
        }
      },
    });
  
    if (feedbackText) {
      // User entered a value, proceed with updating the feedback
      updateFeedback(id, feedbackId , feedbackText)
        .then(updatedClass => {
          // Confirmation logic
          Swal.fire({
            icon: 'success',
            title: 'Feedback Updated',
            text: 'Feedback has been successfully updated',
          });
          // Perform any additional actions or display a success message
          // You can use the updatedClass object to access the updated data
        })
        .catch(error => {
          // Error handling
          Swal.fire({
            icon: 'error',
            title: 'Failed to Update Feedback',
            text: 'An error occurred while updating the feedback',
          });
          // Display an error message or handle the error accordingly
        });
    } else {
      // User canceled or did not enter a value
      Swal.fire({
        icon: 'info',
        title: 'Feedback Input Canceled',
        text: 'You have canceled or left the feedback input empty',
      });
      // Perform any necessary actions or display a message
    }



  }

  return (
    <div>
      {allClasses?.map((cls) => (
        <div className="grid grid-cols-4 gap-1 text-black bg-primary m-4 p-2 shadow-xl">
          <div className=" col-span-4 text-center text-xl font-semibold border-b-2 pb-2 mb-3">
            {cls.className}
          </div>
          <div className="avatar p-2">
            <div className="w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={cls.classPicture} />
            </div>
          </div>
          <div className=" col-span-2 ps-2">
            <h3 className="font-semibold ">Instructor Name: {cls.instructorName}</h3>
            <p className="font-semibold">
              Email: {cls.instructorEmail} <br />
              Available Sets: {cls.availableSeats} <br />
              Price: {cls.classPrice}$
            </p>
          </div>
          <div className=" flex flex-col ">
            <button onClick={()=>updateClassStatus(cls._id,'approved').then(toast.success("it's approved"))} className={`btn btn-sm btn-full bg-orange-500 text-white hover:bg-black mb-2 ${cls.status==="approved"? 'btn-disabled':''} `}>
              Approved
            </button>
            <button className="btn btn-sm btn-full bg-orange-500 text-white hover:bg-black mb-2">
              Deny
            </button>
            <button onClick={()=>handleFeedback(cls._id)} className="btn btn-sm btn-full bg-orange-500 text-white hover:bg-black">
              Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
