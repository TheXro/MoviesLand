import React from "react";
import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7df550bc";

const movie1 = {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTcwNjMzNjM2MF5BMl5BanBnXkFtZTYwMDU5Nzg3._V1_SX300.jpg"
};


const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("star wars");
  }, []);
  return (
    <div className="app">
      <h1>MoviesHub</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value="Ironman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
                  </div>
                  
                  <div className="movie-img">
                      <img src={movie1.Poster !== "N/A" ? Poster : movie1.Poster} alt={movie1.Title} /></div>
        </div>
      </div>
    </div>
  );
};

export default App;
