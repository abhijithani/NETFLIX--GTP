import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) {
        return null;
    }
    console.log(movies);
    console.log(movies[0]);

    return (
        <div className="moviediv">
            <h1 className="list-title">{title}</h1>
            <div  className="movieslist">
                <div className="moviecards">
                    {movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path} />)}

                </div>
            </div>
        </div>
    )
};
export default MovieList;