import React from 'react';

import ProductRow from './ProductRow';

class ProductsTable extends React.Component {

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
					{this.props.productsData.map(v =>
						<ProductRow
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
