import React from 'react';
import PropTypes from 'prop-types';

import ProductRow from './ProductRow';

class ProductsTable extends React.Component {

	static propTypes = {
		productsData: PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.string,
				id: PropTypes.string,
				name: PropTypes.string,
				price: PropTypes.number,
				url: PropTypes.string,
			})
		)
	}

	deleteProduct = (index, name) => {
		this.props.onDel(index, name)
	}

	selectRow = (id) => {
		this.props.onSelect(id)
	}

	render() {
		return(
			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
						<td>URL</td>
						<td>Quantity</td>
						<td>Control</td>
					</tr>
				</thead>
				<tbody>
					{this.props.productsData.map((v, i) =>
						<ProductRow
							key = {v.id}
							id = {v.id}
							index = {i}
							name = {v.name}
							price = {v.price}
							url = {v.url}
							qty = {v.qty}
							onDel = {this.deleteProduct}
							onSelect = {() => this.selectRow}
							isSelected = {this.props.selectedProduct === v.id ? true : false}
						/>
					)}
				</tbody>
			</table>
		)
	}
}

export default ProductsTable;
