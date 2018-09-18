import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

const txt = `
Lorem, ipsum dolor.<br />
Lorem, ipsum dolor.<br>
Lorem, ipsum dolor.<br>
Lorem, ipsum dolor.<br />
Lorem, ipsum dolor.<br />
Lorem, ipsum dolor.<br/>
Lorem, ipsum dolor.
`

ReactDOM.render(
	<App textContent={txt} />,
	document.getElementById("root")
);
