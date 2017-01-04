import React, {Component} from 'react';

class MovieSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	onInputChange(term) {
		// set state object to whatever is inputted
		this.setState({term})
		// print to console for checking
		console.log(this.state.term);
	}

	render() {
		return (
			<div className="search-bar" >
				<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}


}

export default MovieSearch;