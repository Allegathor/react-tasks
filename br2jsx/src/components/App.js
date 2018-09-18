import React from 'react';

import Article from './Article';

function App(props) {
	return (
		<div>
			<Article textContent={props.textContent}/>
		</div>
	)
}

export default App;
