import { API_OPTIONS } from "../../utilis/private";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utilis/movieSlice";

const useNowPlayingMovies = () => {
    //fetch data form TMDB API and updated store

    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?',
            API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlaying();
    }, []);
};

export default useNowPlayingMovies;