import React from 'react';

import Rainbow from './Rainbow';

function App(props) {
	return (
		<div>
			<Rainbow rainbowColors={props.colors}>
				innerText
			</Rainbow>
		</div>
	)
}

export default App;
