import { API_OPTIONS } from "../../utilis/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utilis/movieSlice";
import { useSelector } from "react-redux";
const usePopularMovies = () => {
    //fetch data form TMDB API and updated store
    const popular =  useSelector(store => store.movies.addNowPlayingMovies)
    const dispatch = useDispatch();

    const PopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?',
            API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results))
    };

    useEffect(() => {
        !popular && PopularMovies();
    },[]);
};

export default usePopularMovies;