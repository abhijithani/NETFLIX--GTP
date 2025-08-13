import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";

const Maincontainer = () => {
      const movies = useSelector((store) =>store.movies?.addNowPlayingMovies)

      if(!movies) return ;

      const mainMovies = movies[6];
      // console.log(mainMovies);
      
      const {original_title , overview,id} = mainMovies;

  return (
    <div className="pt-[30%] bg-black  md:pt-0">
        <VideoTitle title ={original_title} overview ={overview}/>
        <Videobackground movieId={id}/>
    </div>
  )
}

export default Maincontainer;
 