export const netflixlogo = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const profileicon = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const IMG_URL = "https://image.tmdb.org/t/p/w500" 

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg "

export const SUPPORTED_LAN = [
    {identifier : "en" , name :"English"},
    {identifier : "hn" , name :"Hindi"},
    {identifier : "mal" , name :"Malayalam"},
];

export const API_OPTIONS = {
   method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  }
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY


export const GEMINI_API = process.env.REACT_APP_GEMINI_KEY