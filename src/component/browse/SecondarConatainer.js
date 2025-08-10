import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const Secondarconatainer = () => {
  const movies = useSelector(store=> store?.movies)
  if(!movies){ 
    return;
  }
  console.log(movies);
  
  return (
    <div className="secondcontainer">
      <MovieList title={"Now playing"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Popular"} movies ={movies?.addPopularMovies}/>
      <MovieList title={"Popular"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Horror"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Thriller"} movies ={movies?.addNowPlayingMovies}/>
    
    </div>
  )
}

export default Secondarconatainer
