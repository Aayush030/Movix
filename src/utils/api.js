import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTcwYWVhMjQ2ZDBkOGExMmE2OWNiNDU3NmZhM2ZlMSIsInN1YiI6IjY1MjZiNjcxY2VkYWM0MDEzZmFiYmE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sP1uYcyupGM3rglDl7lm5nfCWyxfKK_f17OiwL0rz1U";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
