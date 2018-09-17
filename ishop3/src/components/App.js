import React from 'react';

import Shop from './Shop';

class App extends React.Component {

	render() {
		return (
			<Shop productsData = {this.props.productsData} />
		)
	}
}

export default App;
