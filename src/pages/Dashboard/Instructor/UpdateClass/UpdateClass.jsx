import { useForm } from "react-hook-form";
import axios from "axios";
import { useLoaderData} from "react-router-dom";
  
const UpdateClass = () => {
    const {_id,className,classPicture,classPrice,availableSeats,classDescription} = useLoaderData()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const updatedData = {...data}
    axios.patch(`/classes/update-instructor/${_id}`,updatedData).then(data=>console.log(data.data))
  };
  return (
    <div>
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
              defaultValue={className}
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
              defaultValue={classPicture}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.classPic && (
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
              defaultValue={classPrice}
              {...register("classPrice", {
                required: true,
                valueAsNumber: true,
              })}
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
              defaultValue={availableSeats}
              {...register("availableSeats", {
                required: true,
                valueAsNumber: true,
              })}
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
              defaultValue={classDescription}
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
            Update Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
