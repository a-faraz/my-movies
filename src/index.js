import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MovieSearch from './components/movie_search';
import MovieAdd from './components/movie_add';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {

		return (
			<div>	
				<div className="page-title"> Home Movie Collection </div>

			</div>
		)
	}
}

ReactDOM.render( <App />  , document.querySelector('.container'));