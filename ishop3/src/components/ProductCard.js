import React from 'react';

class ProductCard extends React.Component{

	handleNewClick = () => {
		this.props.onCreate()
	}

	handleAddClick = () => {
		this.props.onAdd();
	}

	handleSaveClick = () => {
		this.props.onEdit();
	}

	handleCancelClick = () => {
		this.props.onCancel();
	}

	handleNameChange = (evt) => {
		this.props.onNameEdit(evt.target.value);
	}

	handlePriceChange = (evt) => {
		this.props.onPriceEdit(evt.target.value);
	}

	handleURLChange = (evt) => {
		this.props.onURLEdit(evt.target.value);
	}

	handleQtyChange = (evt) => {
		this.props.onQtyEdit(evt.target.value);
	}

	render() {
		return (
			<div>
				{(this.props.cardMode === 0) &&
					<div>
						<button onClick={this.handleNewClick}>New product</button>
						{(this.props.selectedProductData) &&
							<div>
								<h2>{this.props.selectedProductData.name}</h2>
								<div>{this.props.selectedProductData.desc}</div>
								<div>Price: <b>{this.props.selectedProductData.price}</b></div>
							</div>
						}
					</div>
				}

				{(this.props.cardMode === 1) &&
					<div>
						<h2>Edit existing Product</h2>
						<form>
							<div>
								<label>Name</label>
								<input value={this.props.editingProductData.name} onChange={this.handleNameChange}/>
							</div>
							<div>
								<label>Price</label>
								<input value={this.props.editingProductData.price} onChange={this.handlePriceChange}/>
							</div>
							<div>
								<label>URL</label>
								<input value={this.props.editingProductData.url} onChange={this.handleURLChange}/>
							</div>
							<div>
								<label>Quantity</label>
								<input value={this.props.editingProductData.qty} onChange={this.handleQtyChange}/>
							</div>
						</form>
						<button onClick={this.handleSaveClick}>Save</button>
						<button onClick={this.handleCancelClick}>Cancel</button>
					</div>
				}

				{(this.props.cardMode === 2) &&
					<div>
						<h2>Add new product</h2>
						<button>Add</button>
						<button onClick={this.handleCancelClick}>Cancel</button>
					</div>
				}

			</div>
		)
	}
}

export default ProductCard;
