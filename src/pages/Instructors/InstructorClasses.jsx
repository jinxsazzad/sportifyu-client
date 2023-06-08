import { useLoaderData } from "react-router-dom";

const InstructorClasses = () => {
  const instructorClasses = useLoaderData();
  return (
    <div className="grid grid-cols-4 p-4 gap-2 bg-primary">
      {instructorClasses?.map((cla) => (
        <div className="card w-60 rounded-md shadow-xl text-black bg-white">
          <figure>
            <div className="avatar">
              <div className="w-40 h-40">
                <img src="https://i.ibb.co/18TwhL7/Toy-superhero-avengers-png-image.png" />
              </div>
            </div>
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">
              Name Alex
              <span className="badge badge-secondary">New</span>
            </h2>
            <p>Email: alex@gamil.com</p>
            <div className="card-actions">
              <div className="badge badge-outline btn btn-xs rounded-full">
                See classes
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorClasses;
