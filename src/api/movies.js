import axios from "axios";
import { setMovies } from "../slice/movieSlice";
export const getMovies =  () => async dispatch => {
    const URL = "https://api.jikan.moe/v4/top/anime?sfw";
    try {
        const res = await axios.get(URL);
        const {data} = res.data;
        // console.log(data);
        dispatch(setMovies(data));
        return data;
        
    } catch (error) {
        return error
    }
}