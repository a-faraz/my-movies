import React, {Component} from 'react';

import MovieSearch from './movie_search';
import MovieAdd from './movie_add';
import MovieList from './movie_list';

class MovieApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [ 
				{
					id: 1,
					title: "Inception",
					genre: "Action",
					actors: "di caprio",
					rating: 7,
					year: 2010
				}, {
					id: 2,
					title: "Titanic",
					genre: "Romance",
					actors: "di caprio",
					rating: 6,
					year: 1994
				}
			]
		};

		// create function to get localStorage data on load
		// localSearch = () => {
		//		localStorage.getItem();
		// }
	}


	render() {
		const {movies} = this.state;
		return (
			<div >
				<MovieList movies={movies} />
				<MovieAdd />
				<MovieSearch />
			</div>
		)
	}


}

export default MovieApp;