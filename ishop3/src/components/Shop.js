import React from 'react';

import ProductsTable from './ProductsTable';
import ProductCard from './ProductCard';

class Shop extends React.Component {
	state = {
		productsData: this.props.productsData,
		selectedProductData: null,
		editingProductData: null,

		cardMode: 0
	}

	toggleViewMode = () => {
		this.setState({cardMode: 0});
	}

	toggleEditorMode = (index) => {
		const edProduct = {...this.state.productsData[index]};
		this.setState({
			cardMode: 1,
			editingProductData: edProduct
		})
	}

	toggleAdditionMode = () => {
		this.setState({cardMode: 2})
	}

	editName = (name) => {
		const edited = {...this.state.editingProductData, name: name}
		this.setState({editingProductData: edited})
	}

	editPrice = () => {

	}

	editURL = () => {

	}

	editQty = () => {

	}

	applyChanges = (index) => {
		const edited = this.state.editingProductData;
		const data = this.state.productsData.slice();

		data.splice(index, 1, edited);
		this.setState({productsData: data});
	}

	addProduct = () => {
		this.setState({cardMode: 1});
	}

	selectProduct = (index) => {
		const selected = Object.create(this.state.productsData[index]);
		this.setState({selectedProductData: selected});
	}

	deleteProduct = (index, id, name) => {
		if(window.confirm(`Delete ${name} ?`)) {
			const copyArr = this.state.productsData.slice();
			const sel = this.state.selectedProductData;
			const ed = this.state.editingProductData;

			copyArr.splice(index, 1);
			this.setState({
				productsData: copyArr
			})

			if(sel && (sel.id === id)) this.setState({selectedProductData: null})
			if(ed && (ed.id === id)) this.setState({cardMode: 0, editingProductData: null})

		}
	}

	render() {
		return (
			<div>
				<ProductsTable
					productsData={this.state.productsData}
					selectedProductData={this.state.selectedProductData}

					onDel={this.deleteProduct}
					onSelect={this.selectProduct}

					onEdit={this.toggleEditorMode}
				/>

				<ProductCard
					selectedProductData={this.state.selectedProductData}
					editingProductData={this.state.editingProductData}
					cardMode={this.state.cardMode}

					onCreate={this.toggleAdditionMode}
					onCancel={this.toggleViewMode}

					onAdd={this.addProduct}
					onApply={this.applyChanges}
					onNameEdit={this.editName}
				/>
			</div>
		)
	}
}

export default Shop;
