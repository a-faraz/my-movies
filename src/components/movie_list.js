import React from 'react';

import MovieListItem from './movie_list_item';
// props in functional component
// this.props in class component

const MovieList = (props) => {

	const movieItems = props.movies.map((movie) => {
		return (
			<MovieListItem
			// {...movie} allows you to spread out props
			key={movie.id} {...movie} />
		)
	});

	return (
		<ul className="col-md-4 list-group" >
			{movieItems}
		</ul>
	);
}


export default MovieList;