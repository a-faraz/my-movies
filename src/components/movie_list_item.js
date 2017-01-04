import React from 'react'

const MovieListItem = (movie) => {

	//console.log("list item= ", movie.movieName);
	const title = movie.movieName;
	const id = movie.id
	
	return (
		<li className="list-group-item">
				<div>
					<div className="movie-heading">{movie.movieName}</div>
			</div>
		</li>
	);

}

export default MovieListItem;