import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { saveUser } from "../../api/auth";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useAuth();

  const onSubmit = (data) => {
    signIn(data.mail, data.password)
      .then((result) => {
        const user = result?.user;
        if (user) {
          saveUser(user);
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorMessage) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });

    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white flex-col justify-center items-center shadow-md rounded-xl w-full  lg:w-1/3 mx-auto my-12 py-8 text-black">
      <form className="py-1 px-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold -mt-6 mb-6 text-center">
          Login Form !
        </h1>

        {/* Emil Address field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mail"
          >
            Email Address
          </label>
          <input
            className={`shadow border ${
              errors.mail ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="mail"
            type="email"
            {...register("mail", { required: "Email is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && (
            <p className="text-red-500 text-xs italic">{errors.mail.message}</p>
          )}
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className={`shadow border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <span
              className=" absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs italic">Password is required.</p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded btn-sm focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
        <p className="text-center my-4">
          Don't have an account!
          <Link
            to={"/signup"}
            className="underline bg-blue-500 hover:bg-blue-700 text-white font-semibold   py-1 rounded-full btn-sm focus:outline-none focus:shadow-outline ms-1"
          >
            Create Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
