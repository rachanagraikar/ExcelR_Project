//using fetch to get all user.

export const loadUsers = ()=>{
    return fetch("http://localhost:8080/users",{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
    })
        .then(response =>{
            return response.json()
        })
}