import useAuth from "./useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL:"https://assignment-twelve-server-seven.vercel.app/",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const jwtToken = localStorage.getItem("access-token");
      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
