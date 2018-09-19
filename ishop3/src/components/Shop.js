import React from 'react';

import ProductsTable from './ProductsTable';
import ProductCard from './ProductCard';

class Shop extends React.Component {
	state = {
		productsData: this.props.productsData,
		selectedProductData: null,
		editingProductData: null,

		cardMode: 0,
		counterID: this.props.productsData[this.props.productsData.length - 1].id,

		validationStatus: false,

		isValidName: false,
		isValidPrice: false,
		isValidUrl: false,
		isValidQty: false
	}

	toggleViewMode = () => {
		this.setState({
			cardMode: 0,
			editingProductData: null,

			isValidName: false,
			isValidPrice: false,
			isValidUrl: false,
			isValidQty: false
		});
	}

	toggleEditorMode = (id) => {
		const edProduct = this.state.productsData.reduce((acc, v) => (
			acc = (v.id === id) ? v : acc
		), {})

		this.validate(
			edProduct.name,
			edProduct.price,
			edProduct.url,
			edProduct.qty
		)
		this.setState({
			cardMode: 1,
			editingProductData: edProduct,
			selectedProductData: null
		})
	}

	toggleAdditionMode = () => {
		const numID = parseInt(this.state.counterID, 10) + 1;
		const strID = numID.toString(10);

		this.setState({
			counterID: strID,
			cardMode: 2,
			selectedProductData: null,

			isValidName: false,
			isValidPrice: false,
			isValidUrl: false,
			isValidQty: false
		})
	}

	changeName = (name) => {
		const ed = {...this.state.editingProductData, name: name};
		this.setState({
			editingProductData: ed
		})
	}

	changePrice = (price) => {
		const ed = {...this.state.editingProductData, price: price};
		this.setState({
			editingProductData: ed
		})
	}

	changeUrl = (url) => {
		const ed = {...this.state.editingProductData, url: url};
		this.setState({
			editingProductData: ed
		})
	}

	changeQty = (qty) => {
		const ed = {...this.state.editingProductData, qty: qty};
		this.setState({
			editingProductData: ed
		})
	}

	validate(name, price, url, qty) {
		this.validateName(name);
		this.validatePrice(price);
		this.validateUrl(url);
		this.validateQty(qty);
	}

	validateName = (name) => {
		if(/[a-zA-Z]+/.test(name)) {
			this.setState({isValidName: true})

		} else {
			this.setState({isValidName: false})

		}
	}

	validatePrice = (price) => {
		if( !isNaN(parseFloat(price, 10)) && price > 0 ) {
			this.setState({isValidPrice: true})

		} else {
			this.setState({isValidPrice: false})

		}

	}

	validateUrl = (url) => {
		if(typeof url === 'string' && url) {
			const regexCheck = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/.test(url)

			if(regexCheck) {
				this.setState({isValidUrl: true})

			} else {
				this.setState({isValidUrl: false})

			}
		}
	}

	validateQty = (qty) => {
		if( !isNaN(parseInt(qty, 10))  && qty > 0) {
			this.setState({isValidQty: true})

		} else {
			this.setState({isValidQty: false})

		}
	}

	applyChanges = (id) => {
		const edited = {
			...this.state.editingProductData,
			price: parseFloat(this.state.editingProductData.price, 10),
			qty: parseInt(this.state.editingProductData.qty, 10)
		};

		const data = this.state.productsData.map(v => (
			(v.id === id) ? edited : v
		))

		this.setState({
			cardMode: 0,
			productsData: data,

			isValidName: false,
			isValidPrice: false,
			isValidUrl: false,
			isValidQty: false
		});
	}

	addProduct = () => {
		const newProduct = {
			...this.state.editingProductData,
			id: this.state.counterID,
			price: parseFloat(this.state.editingProductData.price, 10),
			qty: parseInt(this.state.editingProductData.qty, 10)
		};
		const data = this.state.productsData.slice();

		data.push(newProduct);

		this.setState({
			cardMode: 0,
			productsData: data,

			isValidName: false,
			isValidPrice: false,
			isValidUrl: false,
			isValidQty: false
		});
	}

	selectProduct = (id) => {
		if(this.state.cardMode === 0) {
			const selected = this.state.productsData.reduce((acc, v) => (
				acc = (v.id === id) ? v : acc
			), {})

			this.setState({selectedProductData: selected});

			}
		}

	deleteProduct = (id, name) => {
		if(window.confirm(`Delete ${name} ?`)) {
			const sel = this.state.selectedProductData;
			const ed = this.state.editingProductData;
			const arr = this.state.productsData;
			const filtArr = arr.filter((v, i) => (v.id !== id))

			this.setState({
				productsData: filtArr

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
					editingProductData={this.editingProductData}

					onDel={this.deleteProduct}
					onSelect={this.selectProduct}
					onCheck={this.validate}

					onEdit={this.toggleEditorMode}
				/>

				<ProductCard
					selectedProductData={this.state.selectedProductData}
					editingProductData={this.state.editingProductData}
					cardMode={this.state.cardMode}
					counterID={this.state.counterID}

					onCreate={this.toggleAdditionMode}
					onCancel={this.toggleViewMode}

					onAdd={this.addProduct}
					onApply={this.applyChanges}

					nameChangeCB={this.changeName}
					priceChangeCB={this.changePrice}
					urlChangeCB={this.changeUrl}
					qtyChangeCB={this.changeQty}

					nameBlurCB={this.validateName}
					priceBlurCB={this.validatePrice}
					urlBlurCB={this.validateUrl}
					qtyBlurCB={this.validateQty}

					isValidName={this.state.isValidName}
					isValidPrice={this.state.isValidPrice}
					isValidUrl={this.state.isValidUrl}
					isValidQty={this.state.isValidQty}
				/>
			</div>
		)
	}
}

export default Shop;
