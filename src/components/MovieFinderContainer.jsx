import { useState, useEffect } from 'react'
import Movie from './Movie'

const MovieFinderContainer = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const titleOnChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=a8f52dc1&s=${title}`)
            .then((res) => res.json())
            .then((resmovies) => {
                if (resmovies.Search) {
                    setMovies(resmovies.Search);
                }
            });
    }, [title]);
    
    return (
        <div>
            <div className="form-container">
            <label htmlFor="title">Buscar título</label>
            <input id="title" onChange={titleOnChangeHandler} value={title} />
            </div>
            <div className='results'>
            {movies.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
            ))}
            </div>
        </div>
    )
}
export default MovieFinderContainer