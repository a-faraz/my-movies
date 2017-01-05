import React from 'react'

	// same as movie = props.movie
const MovieListItem = ({movie, onDeleteMovie}) => {

	// each movie comes as an individual object
	// console.log("movie: ", movie);

	return (
		<li className="list-group-item">
					<div className="delete" href="#" onClick={() => onDeleteMovie(movie.id)} >
						x
					</div>
					<div className="item-heading">
						{movie.title} ({movie.year})
					</div>
					<div className="item-detail">
						Actors: {movie.actors} <br/>   
						Genre: {movie.genre} <br/>
						Rating: {movie.rating}
					</div>

		</li>
	);

}

export default MovieListItem;