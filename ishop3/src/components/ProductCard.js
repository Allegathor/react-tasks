import React from 'react';

class ProductCard extends React.Component{
	render() {
		return (
			<div>
				{(this.props.cardMode === 0) &&
					<div>
						<button>New product</button>
						{this.props.productsData.forEach((v, i) => {
							if(this.props.selectedItem === v.id) {

							}
						})}
						<div></div>
					</div>
				}

				{(this.props.cardMode === 1) &&
					<div>
						<button>New product</button>
						<div>Edit</div>
					</div>
				}

				{(this.props.cardMode === 2) &&
					<div>
						<button>New product</button>
						<div>Add</div>
					</div>
				}

			</div>
		)
	}
}

export default ProductCard;
