import { useSelector } from "react-redux";
import Header from "../Header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Maincontainer from "./Maincontainer";
import Secondarconatainer from "./SecondarConatainer";
import GtpSearch from "../gtpSearch/GtpSearch";

const Browse = () => {
  const showGtpSearch = useSelector((store) => store.gtp.showGtpSearch)

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="browse">
      <Header />
      {showGtpSearch ? (
        <GtpSearch />
      )
        : (
          <>
            <Maincontainer />
            <Secondarconatainer />
          </>
        )}
    </div>
  )
}

export default Browse;
