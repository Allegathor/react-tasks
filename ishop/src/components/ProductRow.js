import React from 'react';

class ProductRow extends React.Component {
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
