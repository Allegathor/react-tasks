import React from 'react';

class ProductCard extends React.Component{

	handleNewClick = () => {
		this.props.onCreate()
	}

	handleAddClick = () => {
		this.props.onAdd();
	}

	handleSaveClick = () => {
		this.props.onApply(this.props.editingProductData.id);
	}

	handleCancelClick = () => {
		this.props.onCancel();
	}

	handleNameCh = (evt) => {
		this.props.nameChangeCB(evt.target.value);
	}

	handlePriceCh = (evt) => {
		this.props.priceChangeCB(evt.target.value);
	}

	handleUrlCh = (evt) => {
		this.props.urlChangeCB(evt.target.value);
	}

	handleQtyCh = (evt) => {
		this.props.qtyChangeCB(evt.target.value);
	}

	handleNameBl = (evt) => {
		this.props.nameBlurCB(evt.target.value);
	}

	handlePriceBl = (evt) => {
		this.props.priceBlurCB(evt.target.value);
	}

	handleUrlBl = (evt) => {
		this.props.urlBlurCB(evt.target.value);
	}

	handleQtyBl = (evt) => {
		this.props.qtyBlurCB(evt.target.value);
	}

	render() {
		const errNameMsg = 'Please, fill the field. Value must be a string'
		const errPriceMsg = 'Please, fill the field. Value must be a rational number greater than 0'
		const errUrlMsg = 'Please, fill the field. Value must be a valid URL'
		const errQtyMsg = 'Please, fill the field. Value must be a positive integer'
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
						<span>ID: {this.props.editingProductData.id}</span>
						<form>
							<div>
								<label>Name</label>
								<input
									value={this.props.editingProductData.name}
									onChange={this.handleNameCh}
									onBlur={this.handleNameBl}
								/>

								{(!this.props.isValidName) &&
									<span>{errNameMsg}</span>
								}

							</div>
							<div>
								<label>Price</label>
								<input
									value={this.props.editingProductData.price}
									onChange={this.handlePriceCh}
									onBlur={this.handlePriceBl}
								/>

								{(!this.props.isValidPrice) &&
									<span>{errPriceMsg}</span>
								}

							</div>
							<div>
								<label>URL</label>
								<input
									value={this.props.editingProductData.url}
									onChange={this.handleUrlCh}
									onBlur={this.handleUrlBl}
								/>

								{(!this.props.isValidUrl) &&
									<span>{errUrlMsg}</span>
								}

							</div>
							<div>
								<label>Quantity</label>
								<input
									value={this.props.editingProductData.qty}
									onChange={this.handleQtyCh}
									onBlur={this.handleQtyBl}
								/>

								{(!this.props.isValidQty) &&
									<span>{errQtyMsg}</span>
								}

							</div>
						</form>
						<button
							onClick={this.handleSaveClick}
							disabled={!(this.props.isValidName && this.props.isValidPrice && this.props.isValidQty && this.props.isValidUrl)}
						>Save</button>
						<button onClick={this.handleCancelClick}>Cancel</button>
					</div>
				}

				{(this.props.cardMode === 2) &&
					<div>
						<h2>Add new product</h2>
						<span>ID: {this.props.counterID}</span>
						<form>
							<div>
								<label>Name</label>
								<input
									onChange={this.handleNameCh}
									onBlur={this.handleNameBl}
								/>
								{(!this.props.isValidName) &&
									<span>{errNameMsg}</span>
								}
							</div>

							<div>
								<label>Price</label>
								<input
									onChange={this.handlePriceCh}
									onBlur={this.handlePriceBl}
								/>
								{(!this.props.isValidPrice) &&
									<span>{errPriceMsg}</span>
								}
							</div>

							<div>
								<label>URL</label>
								<input
									onChange={this.handleUrlCh}
									onBlur={this.handleUrlBl}
								/>
								{(!this.props.isValidUrl) &&
									<span>{errUrlMsg}</span>
								}

							</div>

							<div>
								<label>Quantity</label>
								<input
									onChange={this.handleQtyCh}
									onBlur={this.handleQtyBl}
								/>
								{(!this.props.isValidQty) &&
									<span>{errQtyMsg}</span>
								}

							</div>

						</form>
						<button
							onClick={this.handleAddClick}
							disabled={!(this.props.isValidName && this.props.isValidPrice && this.props.isValidQty && this.props.isValidUrl)}
						>Add</button>
						<button onClick={this.handleCancelClick}>Cancel</button>
					</div>
				}

			</div>
		)
	}
}

export default ProductCard;
