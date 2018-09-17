import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import Data from './data';

ReactDOM.render(
	<App
		productsData = {Data}
	/>,
	document.getElementById('root')
)
