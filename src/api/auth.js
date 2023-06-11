import axios from "axios";
import { toast } from "react-hot-toast";

// save a user to db
export const saveUser = (user) => {
  const currentUser = {
    name: user?.displayName,
    profile:user?.photoUrl,
    email: user?.email,
  };
  axios.put(`/users/${user?.email}`, currentUser).then((res) => {
    if (res?.data?.acknowledged === true) {
      toast.success("You added as Student");
    } else {
      toast.error("Something Wrong");
    }
    // console.log(res.data.acknowledged)
  });
};
export const makeAdmin = (user) => {
  const currentUser = {
    name: user?.name,
    email: user?.email,
    role: "admin",
  };
  if(user.role=="admin"){
    return toast.error("He is already admin")
  }
    axios.put(`/users/${user?.email}`, currentUser).then((res) => {
      if (res?.data?.acknowledged === true) {
        toast.success("You added as Admin");
      } else {
        toast.error("Something Wrong");
      }
      // console.log(res.data.acknowledged)
    });
  
};
export const makeInstructor = (user) => {
  const currentUser = {
    name: user?.name,
    email: user.email,
    role: "instructor",
  };
  if(user.role=="instructor"){
    return toast.error("He is already Instructor")
  }
  axios.put(`/users/${user?.email}`, currentUser).then((res) => {
    if (res?.data?.acknowledged === true) {
      toast.success("You added as Instructor");
    } else {
      toast.error("Something Wrong");
    }
    // console.log(res.data.acknowledged)
  });
};

//get role
export const getRole = async (email) => {
  try {
    const response = await axios.get(`/users/${email}`);
    const user = response.data;
    if (user) {
      const role = user.role;
      console.log("User role:", role);
      return role;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    return null;
  }
};

