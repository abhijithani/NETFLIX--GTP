import { API_OPTIONS } from "../../utilis/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utilis/movieSlice";
import { useSelector } from "react-redux";
const useNowPlayingMovies = () => {
    //fetch data form TMDB API and updated store
    const nowPlaying = useSelector(store => store.movies.addNowPlayingMovies)
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?',
                API_OPTIONS);
            const json = await data.json();
            // console.log(json.results);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        !nowPlaying && getNowPlaying();
    }, []);
};

export default useNowPlayingMovies;