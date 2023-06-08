import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { saveUser } from "../../api/auth";
import axios from "axios";

const SignUp = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    createUser,
    updateUserProfile,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  // Password data related
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Collect form data from user by react hook form.
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  // Handle user registration.
  const onSubmit = (data) => {
    // Create user
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //Show signUp successful massage

            //Save user for future other function

            saveUser(loggedUser);
            navigate(from, { replace: true });

            // if (loggedUser) {
            //   const saveUser = {
            //     name: data.name,
            //     email: loggedUser.email,
            //     role: "student",
            //   };
            //   axios.post("/users", saveUser).then((data) => {
            //     if (data?.data?.insertedId) {
            //       Swal.fire({
            //         position: "top",
            //         icon: "success",
            //         title: "Create User Successful",
            //         text: `User Mail: ${loggedUser?.email}`,
            //         showConfirmButton: false,
            //         timer: 1500,
            //       });
            //       navigate("/");
            //     }
            //     console.log(data?.data);
            //   });
            // }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.massage);
            //show err massage by toast
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
    return;
  };

  return (
    <>
      <div className="bg-white flex-col justify-center items-center shadow-md rounded-xl w-full  lg:w-1/3 mx-auto my-10 py-8 text-black">
        <form className="py-1 px-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold -mt-6 mb-6 text-center">
            Registration Form !
          </h1>
          {/* User Name field */}
          <div className="mb-4">
            <input
              className={`shadow border ${
                errors.userName ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="userName"
              type="text"
              placeholder="User Name"
              {...register("name", { required: true, maxLength: 20 })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
            {errors.userName && (
              <p className="text-red-500 text-xs italic">Name is required</p>
            )}
          </div>

          {/* Photo url field */}
          <div className="mb-4">
            <input
              className={`shadow border ${
                errors.photoURL ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="photoURL"
              type="text"
              placeholder="PhotoURL"
              {...register("photoURL", {
                required: true,
                pattern: /\.(jpg|png)$/,
              })}
              aria-invalid={errors.photoURL ? "true" : "false"}
            />
            {errors.photoURL && (
              <p className="text-red-500 text-xs italic">
                Photo URL must be with .jpg or .png format.
              </p>
            )}
          </div>

          {/* Emil Address field */}
          <div className="mb-4">
            <input
              className={`shadow border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="E-mail Address"
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password field */}
          <div className="mb-4">
            <div className="relative">
              <input
                className={`shadow border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,15}$/,
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
              <p className="text-red-500 text-xs italic">
               Password must be 6 characters long, at least one uppercase letter and at least one special character !
              </p>
            )}
          </div>

          {/* Confirm password field */}
          <div className="mb-4">
            {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label> */}
            <div className="relative">
              <input
                className={`shadow border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="confirmPassword"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === getValues("password"),
                })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              <span
                className="absolute top-1/2 right-3 text-black transform -translate-y-1/2 cursor-pointer"
                onClick={handleToggleConfirmPassword}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                Passwords must match.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded btn-sm focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <span className="flex justify-center items-center gap-10 my-2">
            <hr className=" w-1/3" />
            or <hr className="w-1/3" />
          </span>
          <SocialLogin></SocialLogin>
          <p className="text-center mt-4 mb-4">
            Already have an account!{" "}
            <Link
              to={"/login"}
              className="underline bg-blue-500 hover:bg-blue-700 text-white font-semibold   py-1 rounded-full btn-sm focus:outline-none focus:shadow-outline"
            >
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
