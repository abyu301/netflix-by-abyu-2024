import React, { useEffect, useState } from 'react';
import requests from '../../utils/requests';
import axiosInstance from '../../utils/axios';
import './Baner.css';

    function Baner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchNetflixOriginals = async () => {
        try {
            const response = await axiosInstance.get(requests.fetchNetflixOriginals);
            // console.log(response);
            setMovie(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length)
            ]
            );
        } catch (error) {
            console.log("error", error);
        }
        };
        fetchNetflixOriginals();
    }, []);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
        return (
                <div>
                    <div className="banner"
                        style={{
                        backgroundSize: "cover",
                        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                }}
                >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button play">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                </div>
                <div className="banner__fadeBottom" />
            </div>
                </div>
        )
    }

export default Baner