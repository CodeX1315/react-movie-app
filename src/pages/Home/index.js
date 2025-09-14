import { useEffect } from 'react';
import Navbar from '../../component/Navbar';
import { useDispatch, useSelector} from 'react-redux';
import { getMovies } from '../../api/movies';
import MovieCard from '../../component/MovieCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const Home = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(getMovies());
    })
    return (
        <>
            <Navbar />
            <Box  sx={{ flexGrow: 1, margin: 6, gap: 3,  }}>
                <Grid container spacing={2}>
                {
                    // movies?.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                    movies?.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
                </Grid>
            </Box>

        </>
    )
}