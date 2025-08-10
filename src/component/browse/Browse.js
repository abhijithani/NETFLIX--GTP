import Header from "../Header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Maincontainer from "./Maincontainer";
import Secondarconatainer from "./SecondarConatainer";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="browse">
      <Header />
      <Maincontainer/>
      <Secondarconatainer/>
    </div>
  )
}
 
export default Browse;
