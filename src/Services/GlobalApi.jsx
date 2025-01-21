import axios from 'axios'

const api_key = '6fc19e2197fa01f2cfede964ac7b8f65'

//https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=GENRE_ID
//https://api.themoviedb.org/3/trending/all/day?api_key=6fc19e2197fa01f2cfede964ac7b8f65

const movieBaseUrl = 'https://api.themoviedb.org/3'
const movieByGenresUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='


const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieByGenresId = (id) => axios.get(movieByGenresUrl+api_key+"&with_genres="+id)
export default { getTrendingVideos, getMovieByGenresId }