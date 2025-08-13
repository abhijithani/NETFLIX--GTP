import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../../utilis/languagesConstants'
import ai from '../../utilis/geminAI'
import { API_OPTIONS } from '../../utilis/private'
import { addGtpMovieResults } from '../../utilis/gtpSlice'


const GtpSearchBar = () => {

  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const SearchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
      movie +
      '&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json = await data.json();

      return json.results;
  }

  const handleGptSearchClicl = async () => {
    console.log(searchText.current.value);
    //make an API call to GPT API AND GET Movie 

    const gptQuery = "Act as an Movies recommendation system and sugges some movies for the query :" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example given only the name of the movie should in answer- vettam, Godfather ,parakumThalikka ,intersetllar, avesham"

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: gptQuery,
    });
    
    const gptMoviseArray = response?.candidates[0]?.content?.parts[0]?.text.split(",");
    console.log(gptMoviseArray);

    const promiseArray = gptMoviseArray.map((movie) => SearchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGtpMovieResults({movieNames: gptMoviseArray,  movieResults:tmdbResults}))

  }

  return (
    <div className='pt-[7%] flex justify-center'>
      <form className='p-2 w-1/2 bg-slate-800 grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text'
          className='p-3 m-2 col-span-9'
          placeholder={lang[langKey].gtpSearchPlaceholder} />

        <button className='p-2  m-4 bg-red-600 col-span-3 text-white rounded-lg'
          onClick={handleGptSearchClicl}
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GtpSearchBar
