import React from 'react';
import PropTypes from 'prop-types';

import ProductRow from './ProductRow';

class ProductsTable extends React.Component {

	static propTypes = {
		productsData: PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.number,
				id: PropTypes.number,
				name: PropTypes.string,
				price: PropTypes.number,
				url: PropTypes.string,
			})
		)
	}

	render() {
		return(
			<table>
				<thead>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Price</td>
						<td>URL</td>
						<td>Quantity</td>
					</tr>
				</thead>
				<tbody>
					{this.props.productsData.map((v, i) =>
						<ProductRow
							key = {i}
							id = {v.id}
							name = {v.name}
							price = {v.price}
							url = {v.url}
							qty = {v.qty}
						/>
					)}
				</tbody>
			</table>
		)
	}
}

export default ProductsTable;
