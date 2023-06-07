import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleWithPopup = (option) => {
    if (option == "google") {
      signInWithGoogle().then(result => {
        const user = result?.user;
        console.log(user.email);
        if (user) {
          const saveUser = {
            name: user.displayName,
            email: user.email,
            role: "user",
          };
          console.log(saveUser);
          axios.post("/users", saveUser).then((data) => {
            if (data?.data?.insertedId) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Create User Successful",
                text: `User Mail: ${user.email}`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Create User Successful",
                text: `User Mail: ${data?.data?.message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log(data?.data);
          });
          navigate(from,{replace:true});
        }
      });
    } else if (option == "git") {
    } else if (option == "fb") {
    } else return;
  };
  return (
    <div className="flex justify-center items-center gap-10">
      <button onClick={() => handleWithPopup("google")}>
        <FaGoogle></FaGoogle>
      </button>
      <button onClick={() => handleWithPopup("git")}>
        <FaGithub></FaGithub>
      </button>

      <button onClick={() => handleWithPopup("fb")}>
        <FaFacebook></FaFacebook>
      </button>
    </div>
  );
};

export default SocialLogin;
