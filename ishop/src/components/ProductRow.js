import React from 'react';
import PropTypes from 'prop-types';

class ProductRow extends React.Component {

	static propTypes = {
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.number,
		url: PropTypes.string,
		qty: PropTypes.number
	}

	render() {
		return(
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
				<td>{this.props.url}</td>
				<td>{this.props.qty}</td>
			</tr>
		)
	}
}

export default ProductRow;
