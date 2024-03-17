// import axios from 'axios';

// export default axios.create({
//     // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//     baseURL: 'https://localhost:8080/',
//     headers: {"ngrok-skip-browser-warning": "true"},

// })
import React, { useEffect } from 'react';
import axios from 'axios';

function axiosConfig() {
    useEffect(()=>{
        axios.get("api/v1/movies")
        // axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
        })
    },[])
  return (
    <div>axiosConfig</div>
  )
}

export default axiosConfig