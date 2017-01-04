import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MovieApp from './components/movieApp';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {

		return (
			<div>	
				<div className="page-title"> Home Movie Collection </div>
				<MovieApp />
			</div>
		)
	}
}

ReactDOM.render( <App />  , document.querySelector('.container'));