import { useState, useEffect } from 'react'
import Movie from './Movie'

const MovieFinderContainer = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const titleOnChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const nextPageClickHandler=() => {
        setPage(page+1)
    }
    const prevPageClickHandler=() => {
        if (page>1) {
            setPage(page-1)
        }
    }
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=a8f52dc1&s=${title}&page=${page}&plot=full`)
            .then((res) => res.json())
            .then((resmovies) => {
                if (resmovies.Search) {
                    setMovies(resmovies.Search);
                    setCount(resmovies.totalResults)
                }
            });
    }, [title,page]);
    
    return (
        <div>
            <div className="form-container">
            <span>Peliculas encontradas: {count}</span>
            <label htmlFor="title">Buscar título</label>
            <input id="title" onChange={titleOnChangeHandler} value={title} />
            </div>
            <div className='results'>
            {movies.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} />
            ))}
            </div>
            <button onClick={prevPageClickHandler}>prev</button>
            <button onClick={nextPageClickHandler}>next</button>
        </div>
    )
}
export default MovieFinderContainer