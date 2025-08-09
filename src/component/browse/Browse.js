import Header from "../Header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarconatainer from "./SecondarConatainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondarconatainer/>
    </div>
  )
}
 
export default Browse;
