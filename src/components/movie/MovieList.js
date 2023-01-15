import React, { useEffect, useState } from "react";
import "swiper/scss";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=136bd4a419bb11c5c57db009753ccb93
const MovieList = ({ type = "now_playing"}) => {
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=136bd4a419bb11c5c57db009753ccb93`,
        fetcher
    );
    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
            >
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieList;
