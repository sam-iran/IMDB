import React from "react";

function MovieCard({ posterPath, name }) {
  return (
    <div
      className="flex flex-row-reverse h-60 w-40 bg-cover bg-center rounded-lg hover:scale-110 duration-300 ease-in-out"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${posterPath}')`,
      }}
    >
      <div className="m-2 bg-stone-100/70 rounded-lg h-6 w-6">
        <img src="./src/assets/favorite.svg"/>
      </div>
    </div>
  );
}

export default MovieCard;
