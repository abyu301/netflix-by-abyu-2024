import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

function instance() {
    return axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: {
            api_key: API_KEY,
            language: "en-US",
        },
    });
}

export default instance();
// instance bilen be axios method kerasachin leraasachin filun acces madreg enichilalen
