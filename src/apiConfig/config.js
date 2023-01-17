export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apikey = "136bd4a419bb11c5c57db009753ccb93";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${tmdbEndpoint}/${type}?api_key=${apikey}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apikey}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${apikey}`,
    getMovieSearch: (query, page) =>
        `${tmdbEndpointSearch}?api_key=${apikey}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
