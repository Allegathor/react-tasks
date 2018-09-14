import React from 'react';

import Card from './Card';

function App(props) {
	return (
		<div>
			<Card strArr = {props.strArr} />
		</div>
	)
}

export default App;
