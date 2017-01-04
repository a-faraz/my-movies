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
					title: "Inception"
				}, {
					id: 2,
					title: "Titanic"
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