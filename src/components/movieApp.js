import React, {Component} from 'react';
import uuid from 'node-uuid';

import MovieSearch from './movie_search';
import MovieAdd from './movie_add';
import MovieList from './movie_list';
import MovieAPI from '../api/movieAPI';

class MovieApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			movies: []
		};
	}

	handleAddMovie(title, actors, year, genre, rating) {
		this.setState({
			movies: [
			// spread operator to include all previous movies
				...this.state.movies,
				{
					id: uuid(),
					title: title,
					genre: genre,
					actors: actors,
					rating: rating,
					year: year
				}
			]
		});

		console.log("this.state.movies from handleAddMovie: ", this.state.movies);
	}

	handleDeleteMovie(id) {
		// filter -- newArr takes all values except the one with id from the parameter
		let newArr = this.state.movies.filter((x) => x.id != id);
		this.setState({ movies: newArr });
	}

	handleSearchMovie(searchText) {
		// searchText comes from MovieSearch component and gets inserted into state
		this.setState({ searchTerm: searchText.toLowerCase() })
	}

	render() {
		const {searchTerm, movies} = this.state;
		const filteredMovies = this.state.movies.filter((movie) => { 
				return movie.title.toLowerCase().match(this.state.searchTerm)  ||
								movie.genre.toLowerCase().match(this.state.searchTerm) ||
								movie.actors.toLowerCase().match(this.state.searchTerm)||
								movie.rating.toLowerCase().match(this.state.searchTerm)||
								movie.year.toString().match(this.state.searchTerm)
		});
		return (
			<div >
				<MovieSearch onSearchMovie={this.handleSearchMovie.bind(this)} />
				<MovieAdd onAddMovie={this.handleAddMovie.bind(this)} />
				<MovieList 
					movies={filteredMovies} 
					onDeleteMovie={this.handleDeleteMovie.bind(this)} />
			</div>
		)
	}

}

export default MovieApp;