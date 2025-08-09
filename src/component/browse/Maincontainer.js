import { useSelector } from "react-redux";
import "./browser.css";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";

const Maincontainer = () => {
      const movies = useSelector((store) =>store.movies?.addNowPlayingMovies)

      if(!movies) return ;

      const mainMovies = movies[1];
      // console.log(mainMovies);
      
      const {original_title , overview,id} = mainMovies;

  return (
    <div className="maincontainer">
        <VideoTitle title ={original_title} overview ={overview}/>
        <Videobackground movieId={id}/>
    </div>
  )
}

export default Maincontainer;
 