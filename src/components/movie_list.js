import React from 'react';

import MovieListItem from './movie_list_item';
// props in functional component
// this.props in class component

const MovieList = (props) => {

	const movieItems = props.movies.map((movie) => {
		return (
			<MovieListItem
			onDeleteMovie={props.onDeleteMovie}
			// {...movie} allows you to spread out props
			//	key={movie.id} {...movie} />
			key={movie.id} movie={movie} />
		)
	});

	return (
		<ul className="list-group" >
			{movieItems}
		</ul>
	);
}


export default MovieList;