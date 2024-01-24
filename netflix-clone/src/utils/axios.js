import axios from 'axios';

function instance() {
    return axios.create({
        baseURL: "https://api.themoviedb.org/3",
    });
}

export default instance();
// instance bilen be axios method kerasachin leraasachin filun acces madreg enichilalen
