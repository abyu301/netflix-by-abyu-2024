import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        (async () => {
            try {
                // console.log(fetchUrl)
                const request = await axios.get(fetchUrl);
                // console.log(request)
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        // If a trailer is already playing (trailerUrl is not empty)
        if (trailerUrl) {
            // Clear the trailerUrl, effectively closing the trailer
            setTrailerUrl('');
        } else {
            // If no trailer is playing, find and play the trailer for the clicked movie
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    // Log the URL of the trailer
                    console.log(url);
    
                    // Extract video ID from the trailer URL
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
    
                    // Log the video ID
                    console.log(urlParams.get('v'));
    
                    // Set the trailerUrl state with the video ID
                    setTrailerUrl(urlParams.get('v'));
                });
        }
    }
    

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row