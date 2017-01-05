import React, {Component} from 'react';

class MovieAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleSubmit(e) {
		// stop page from reloading
		e.preventDefault();
		const movieTitle = this.refs.movieTitle.value;
		const movieActors = this.refs.movieActors.value;
		const movieYear = this.refs.movieYear.value;
		const movieGenre = this.refs.movieGenre.value;
		const movieRating = this.refs.movieRating.value;

		// if all values are filled
		if (movieTitle && movieActors && movieYear && movieYear && movieGenre && movieRating) {
			// clear values in all inputs
			this.refs.movieTitle.value = '';
			this.refs.movieActors.value = '';
			this.refs.movieYear.value = '';
			this.refs.movieGenre.value = '';
			this.refs.movieRating.value = '';
			// call function in movieApp which adds these values to its state
			this.props.onAddMovie(movieTitle, movieActors, movieYear, movieGenre, movieRating);
		} else {
			alert('Movie must contain all values!');
		}
	}

	render() {
		return (
				<form className="movie-form" onSubmit={this.handleSubmit.bind(this)}>
					<input className="form-input" type="text" ref="movieTitle" placeholder="Title" />
					<input className="form-input" type="text" ref="movieActors" placeholder="Actors" />
					<input className="form-input" type="text" ref="movieYear" placeholder="Year" />
					<input className="form-input" type="text" ref="movieGenre" placeholder="Genre"/>
					<input className="form-input" type="text" ref="movieRating" placeholder="Rating" />
					<button className="">Add Movie</button>
				</form>
		)
	}


}

export default MovieAdd;