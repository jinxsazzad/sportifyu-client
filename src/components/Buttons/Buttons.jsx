import { Link } from "react-router-dom";

export const ActionBtn = ({ text }) => {
  return (
    <button className="btn bg-orange-500  text-white hover:bg-black">
      {text}
    </button>
  );
};
export const CardBtn = ({ text, link }) => {
    return (
      <button className="btn btn-sm btn-outline bg-orange-500 hover:bg-black ">
        {link ? (
          <Link className="text-white" to={link}>
            {text}
          </Link>
        ) : (
          <span className="text-white">{text}</span>
        )}
      </button>
    );
  };
