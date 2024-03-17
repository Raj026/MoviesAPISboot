import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
        axios.get("api/v1/movies")
        // axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
        })
  },[])
  // const [movies, setMovies] = useState();
  // const getMovies = async () => {
  //   try {
  //     const response = await api.get("api/v1/movies");
  //     console.log("hello")
  //     console.log(response.data)
  //     setMovies(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getMovies();
  // },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
