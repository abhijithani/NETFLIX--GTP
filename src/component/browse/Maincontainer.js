import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useEffect, useState } from "react";

const Maincontainer = () => {
  const [_, setChangeMainMovieTimer] = useState(0);
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);

  useEffect(() => {
    const interval = setInterval(() => setChangeMainMovieTimer(prev => prev + 1), 10000);
    return () => clearInterval(interval);
  }, [])

  if (!movies) return;

  const mainMovies = movies[Math.floor(Math.random() * movies.length)]

  console.log('mainMovies', mainMovies);

  const { original_title, overview, id } = mainMovies;

  return (
    <div className="pt-[30%] bg-black  md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  )
}

export default Maincontainer;
