const axios = require('axios')

const pingit =()=>{
    axios.get("http://localhost:5000/api/auth/heroku").then(res =>{
        console.log(res.data)
    })
}

setInterval(()=> pingit(), 1680000)