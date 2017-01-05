import React from 'react'

const MovieListItem = ({movie, onDeleteMovie}) => {

	// each movie comes as an individual object
	// console.log("movie: ", movie);

	return (
		<li className="list-group-item">
					<div className="delete" href="#" onClick={() => onDeleteMovie(movie.id)} >
						x
					</div>
				
					<ul className="item-heading">
						{movie.title} ({movie.year})
					</ul>
					<ul>
						Actors: {movie.actors} <br/>   
						Genre: {movie.genre} <br/>
						Rating: {movie.rating}
					</ul>

		</li>
	);

}

export default MovieListItem;