import { useEffect, useState } from "react";
import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {

  const [movies, setMovies]=useState([])
  const [pageNo, setPageNo] = useState(1)

  const prev=()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  const next=()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>
        {axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=013ad30b4f0a47d8a9105ad738a5af07&language=en-US&page=${pageNo}`
        ).then(function(res){setMovies(res.data.results)})}
        , [pageNo])
  return (
    <div className="wish-bck">
      <div className="justify-center text-orange-900 w-full flex font-bold text-xl p-2 border-2">
        <h1 className="text-3xl">Trending Movies</h1>
      </div>
      <div className="m-3 flex flex-row flex-wrap jusify-around justify-between gap-4">
        {movies.map((movie)=>{
          return(<MovieCard posterPath={movie.poster_path} name={movie.title}/>)
        })}
      </div>
      <Pagination pageNo={pageNo} prev={prev} next={next}/>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=013ad30b4f0a47d8a9105ad738a5af07&language=en-US&page=1
