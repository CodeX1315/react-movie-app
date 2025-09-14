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

export const getMovieBySearch = (value) => async (dispatch) => {
  const newURL = "https://api.jikan.moe/v4/anime";
  try {
    const { data } = await axios.get(newURL, {
      params: {
        q: value,   // 👈 this is the correct query param
        sfw: true   // optional filter
      },
    });
    dispatch(setMovies(data.data)); // Jikan wraps results inside data.data
  } catch (error) {
    console.error(error);
  }
};
