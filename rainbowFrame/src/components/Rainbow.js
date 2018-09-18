import React from 'react';
import PropTypes from 'prop-types';

class Rainbow extends React.Component {

	static propTypes = {
		rainBowColors: PropTypes.arrayOf(PropTypes.string)
	}

	render() {

		const colors = this.props.rainbowColors;
		let children = null;

		for(let i = 0; i < colors.length; i++) {
			children = <div style={{border: 'dashed 1px ' + colors[i], padding: '8px'}}>
				{children}
			</div>
		}

		return children;
	}
}

export default Rainbow;
