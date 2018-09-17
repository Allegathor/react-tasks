import React from 'react';

import ProductsTable from './ProductsTable';
import ProductCard from './ProductCard';

class Shop extends React.Component {
	state = {
		productsData: this.props.productsData,
		selectedProduct: "",

		cardMode: 0
	}

	selectProduct = (productID) => {
		this.setState({selectedProduct: productID})
	}

	deleteProduct = (index, name) => {
		if(window.confirm(`Delete ${name} ?`)) {
			const copyArr = this.state.productsData.slice();
			copyArr.splice(index, 1);
			this.setState({
				productsData: copyArr
			})

		}
	}

	render() {
		return (
			<div>
				<ProductsTable
					productsData={this.state.productsData}
					selectedProduct={this.state.selectedProduct}

					onDel={this.deleteProduct}
					onSelect={this.selectProduct}
				/>

				<ProductCard
					selectedProduct={this.state.selectedProduct}
					cardMode={this.state.cardMode}
				/>
			</div>
		)
	}
}

export default Shop;
