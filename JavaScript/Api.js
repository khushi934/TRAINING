const fetchData =()=>{
    const res =fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
    console.log(res)
}
fetchData()