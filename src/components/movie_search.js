import React, {Component} from 'react';

class MovieSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}


	onInputChange(term) {
		let searchText = this.refs.searchText.value;

		this.props.onSearchMovie(searchText);
	}

	render() {
		return (
			<div className="search-bar" >
				<input
				type="search" ref="searchText" placeholder="Search Movies"
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

}

export default MovieSearch;