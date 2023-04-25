const Movie = ({movie}) => {
   
    return(
        <>
            {movie.Poster !=="N/A" && (
                <div className="movie">
                <img className="movie-img" src= {movie.Poster}/>
            <h5>
            {movie.Title} - {movie.Year}
            </h5>
            </div>
            )}
        </>
    )
}
export default Movie;