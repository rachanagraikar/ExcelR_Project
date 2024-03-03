//using fetch to get all categories.

export const loadCategories = ()=>{
    return fetch("http://localhost:8080/api/categories",{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        },
     })
    .then(response =>{
        // console.log("Category",response)
        return response.json();
    })
}