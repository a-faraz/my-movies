import React from 'react';

import MovieListItem from './movie_list_item';
// props in functional component
// this.props in class component

const MovieList = (props) => {
	// console.log("props.movies= ", props.movies)
	// props.movies.map((movie)=> {
	// 	console.log("id= ", movie.id);
	// 	console.log("title= ", movie.title);
	// })
	const movieItems = props.movies.map((movie) => {
		return (
			<MovieListItem 
			// onMovieSelect={props.onMovieSelect}
			key={movie.id} movieName={movie.title} />
		)
	});

	return (
		<ul className="col-md-4 list-group" >
			{movieItems}
		</ul>
	);
}


export default MovieList;