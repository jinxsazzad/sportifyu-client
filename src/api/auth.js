import axios from "axios"

// save a user to db
export const saveUser = user =>{
    const currentUser = {
        email:user.email,
        role:'user'
    }
    axios.post('/user',currentUser).then(data=>console.log(data))
}