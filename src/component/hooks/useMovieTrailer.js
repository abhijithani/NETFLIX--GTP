import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utilis/private";
import { addTrailerVideo } from "../../utilis/movieSlice";

const useMovieTrailer = (movieId) => {
//fetch trailer video &  and updating the store with trailer video data

  const dispatch = useDispatch(movieId);
 
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    
      const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer))

  };
  useEffect(() => {
    getMovieVideo();
  }, [])

}

export default useMovieTrailer;