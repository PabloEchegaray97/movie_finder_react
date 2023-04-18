const Movie = ({movie}) => {
    return(
        <div>
            <img src= {movie.Poster}/>
            <div>
            {movie.Title} - {movie.Year}
            </div>
        </div>
    )
}
export default Movie;