import axios from "axios"

// save a user to db
export const saveUser = user =>{
    const currentUser = {
        name:user.displayName,
        email:user.email,
        role:'student'
    }
    axios.put(`/users/${user?.email}`,currentUser).then(data=>console.log(data?.data?.message))
}

//get role
export const getRole = async email =>{
    const response = await axios.get(`/users/${email}`);
    const user = response
    return(user?.data[0]?.role)
}

// become a instructor 
export const becomeInstructor = email=>{
    const currentUser = {
        role:'instructor'
    }
    return axios.put(`/users/${email}`,currentUser).then(data=>console.log(data))
}

