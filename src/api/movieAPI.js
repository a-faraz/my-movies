/**
localStorage implementation not complete
**/

// using lodash for array methods
var _ = require('lodash');

module.exports = {

	setMovies: function(id, movies) {
		if (_.isArray(movies)) {
		// stringify the state that is passed from the movieApp component
		console.log("setMovies id: ", id)
			localStorage.setItem(id, JSON.stringify(movies));
			return movies;
		}
	},
	getMovies: function() {
		// retrieve movies using key name and set equal to stringMovies
		var stringMovies = localStorage.getItem('movies');
		// create empty array which will hold parsed value
		var movies = [];
		console.log("getMovies stringMovies: ", stringMovies);

		try {
			// parse stringMovies
			movies = JSON.parse(stringMovies);
			console.log("getMovies moviesParsed: ", movies);
		} catch(e) {
			console.log("Error: ", e);
		}

		if (_.isArray(movies)) {
			// if it is an array object return it
			return movies;
		} else {
			// otherwise return empty array
			return [];
		}
	},
	removeMovies: function(movieId) {
		// retrieve movies using key name and set equal to stringMovies
		var stringMovies = localStorage.getItem('movies');
		// create empty array which will hold parsed value
		var movies = [];
		console.log("removeMovies stringMovies: ", stringMovies);

		try {
			// parse stringMovies
			movies = JSON.parse(stringMovies);
			console.log("removeMovies moviesParsed: ", movies);
			_.remove(movies, function(val) {
				return val.id == movieId
			})
		} catch(e) {
			console.log("Error: ", e);
		}

		if (_.isArray(movies)) {
			// if it is an array object return it
			return movies;
		} else {
			// otherwise return empty array
			return [];
		}
	}

};