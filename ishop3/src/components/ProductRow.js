import React from 'react';
import PropTypes from 'prop-types';

class ProductRow extends React.Component {

	static propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		url: PropTypes.string,
		qty: PropTypes.number
	}

	handleRowClick = (evt) => {
		if(evt.target.tagName === 'TR' || evt.target.tagName === 'TD') {
			this.props.onSelect(this.props.id);
		}
	}

	handleEditClick = () => {
		this.props.onEdit(this.props.id);
	}

	handleDelClick = () => {
		this.props.onDel(this.props.id, this.props.name)
	}

	render() {
		return(
			<tr onClick={this.handleRowClick} className={this.props.isSelected ? 'is-selected' : ''}>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
				<td>{this.props.url}</td>
				<td>{this.props.qty}</td>
				<td>
					<button onClick={this.handleEditClick}>Edit</button>
					<button onClick={this.handleDelClick}>Delete</button>
				</td>
			</tr>
		)
	}
}

export default ProductRow;
