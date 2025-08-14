import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const Secondarconatainer = () => {
  const movies = useSelector(store=> store?.movies)
  if(!movies){ 
    return;
  }
  console.log(movies);
  
  return (
    <div className="bg-black w-screen aspect-video">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-10">
      <MovieList title={"Now playing"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies ={movies?.addPopularMovies}/>
      <MovieList title={"Popular"} movies ={movies?.addNowPlayingMovies}/>
      <MovieList title={"Rated"} movies ={movies?.addPopularMovies}/>
      </div>
     
    </div>
  )
}

export default Secondarconatainer
