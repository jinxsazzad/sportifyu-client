import axios from "axios"

// save a user to db
export const saveUser = user =>{
    const currentUser = {
        email:user.email,
        role:'student'
    }
    // axios.put(`/users/${user?.email}`,currentUser).then(data=>console.log(data))
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => console.log(data))
}

// become a instructor 
export const becomeInstructor = email=>{
    const currentUser = {
        role:'instructor'
    }
    return axios.put(`/users/${email}`,currentUser).then(data=>console.log(data))
}

//get role
export const getRole = async email =>{
    const response = await axios.get(`/users/${email}`);
    const user = response
    return user?.role
}