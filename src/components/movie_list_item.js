import React from 'react'

const MovieListItem = (movie) => {

	return (
		<li className="list-group-item">
				<div className="movie-heading">{movie.title} ({movie.year})</div>
				<div className="sub-heading">
						Cast: {movie.actors} <br/>
						Genre: {movie.genre} <br/>
						Rating: {movie.rating}
				</div>
		</li>
	);

}

export default MovieListItem;