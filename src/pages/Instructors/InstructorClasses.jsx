import { useLoaderData } from "react-router-dom";

const InstructorClasses = () => {
  const instructorClasses = useLoaderData();
  return (
    <div className="grid grid-cols-4 p-4 gap-2 bg-primary">
      {instructorClasses?.map((cla) => (
        <div key={cla._id} className="card rounded-md shadow-xl text-black bg-white">
          <figure>
            <div className="avatar">
              <div className="w-40 h-40 p-2">
                <img src={cla.classPicture} />
              </div>
            </div>
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">
              {cla.className}
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
