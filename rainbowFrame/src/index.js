import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

ReactDOM.render(
	<App colors={colors} />,
	document.getElementById("root")
);
