import { useEffect } from 'react';
import Navbar from '../../component/Navbar';
import { useDispatch, useSelector} from 'react-redux';
import { getMovies } from '../../api/movies';

export const Home = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [])
    return (
        <>
            <Navbar />
        </>
    )
}