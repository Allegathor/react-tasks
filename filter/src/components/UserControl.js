import React from 'react';

class UserControl extends React.Component {
	render() {
		return(
			<div>
				<label>Фильтровать:</label>
				<input type='text' value={this.props.filterVal} onChange={this.props.handleChange} />

				<label>Сортировать:</label>
				<input type='checkbox' value={this.props.sortFlag} onClick={this.props.handleCheck}/>
			</div>
		)
	}
}

export default UserControl;


