import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
/*import AppMainComponent from './components/AppMainComponent.js';

ReactDOM.render(
	<AppMainComponent />,
	document.getElementById('root'));
*/
ReactDOM.render(
	<App 
		title="App Title"
		number={5} 
		text="text...." />,
	document.getElementById('root'));
