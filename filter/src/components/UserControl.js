import React from 'react';

class UserControl extends React.Component {

	handleInputChange = (evt) => {
		this.props.onInputChange(evt);
	}

	handleChbxClick = (evt) => {
		this.props.onFlagChange(evt);
	}

	render() {
		return(
			<div>
				<label>Фильтровать:</label>
				<input type='text' value={this.props.filterVal} onChange={this.handleInputChange} />

				<label>Сортировать:</label>
				<input type='checkbox' value={this.props.sortFlag} onClick={this.handleChbxClick}/>
			</div>
		)
	}
}

export default UserControl;


