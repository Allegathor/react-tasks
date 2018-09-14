import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

const words = [
	'доклад', 'мышца', 'король', 'тир', 'аквариум', 'соль', 'лук', 'отбой', 'район', 'атом', 'кора', 'косметика', 'узел', 'мазь', 'наглость', 'суслик', 'опала', 'палец', 'дед', 'тучи'
];

ReactDOM.render(
	<App strArr = {words} />,
	document.getElementById("root")
);
