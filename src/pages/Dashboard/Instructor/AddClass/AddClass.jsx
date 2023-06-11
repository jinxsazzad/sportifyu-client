import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { HomePageTittles } from "../../../../components/Tittles/Tittles";
import { toast } from "react-hot-toast";
const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const classData = {...data,
    status:'pending',
    selectedStudent:0,
    enrolledStudent:0,
    adminFeedback:"",
    }
    console.log(classData)

    axios.post('/classes',classData).then(data=>{
      if(data.data.acknowledged === true){
        toast.success("You successfully Added")
      }
      console.log(data.data)})

  };
  return (
    <div>
      <HomePageTittles tittle="Add Your Class to Site" subTittle="A response will send to admin. Wail for confirmation" />
      <div className=" p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto grid grid-cols-1 gap-4 lg:grid-cols-4 border-2 border-orange-600 m-4 p-6 rounded-md bg-primary"
        >
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="className" className="block mb-1">
              Class Name:
            </label>
            <input
              type="text"
              id="className"
              {...register("className", { required: true })}
              placeholder="Class Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.className && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="classPic" className="block mb-1">
              Class Picture:
            </label>
            <input
              type="text"
              id="classPic"
              {...register("classPicture", { required: true })}
              placeholder="Enter picture URL"
              defaultValue={"https://i.ibb.co/FHwb3Hg/Png-Item-44371.png"}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.classPic && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="instructorName" className="block mb-1">
            Instructor Name:
            </label>
            <input
              type="text"
              id="instructorName"
              {...register("instructorName", { required: true })}
              defaultValue={user?.displayName || "User Unknown"}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.instructorName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="instructorMail" className="block mb-1">
            Instructor E-mail:
            </label>
            <input
              type="email"
              id="instructorMail"
              {...register("instructorEmail", { required: true })}
              defaultValue={user?.email || "email is not found"}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.instructorMail && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              defaultValue={30}
              {...register("classPrice", { required: true , valueAsNumber:true})}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          
          <div className="mb-4 lg:col-span-2">
            <label htmlFor="seats" className="block mb-1">
              Available Seats:
            </label>
            <input
              type="number"
              id="seats"
              defaultValue={50}
              {...register("availableSeats", { required: true, valueAsNumber:true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.seats && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4 lg:col-span-4">
            <label htmlFor="description" className="block mb-1">
              Class Description:
            </label>
            <textarea
              id="description"
              {...register("classDescription", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded lg:col-span-4"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
