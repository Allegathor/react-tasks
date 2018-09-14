import React from 'react';

import UserControl from './UserControl';
import List from './List';

class Card extends React.Component {
	state = {
		filterVal: '',
		sortFlag: false,
		strings: this.props.strArr
	}

	handleCheck = (evt) => {
		this.updateList(this.state.filterVal, evt.target.checked);
	}

	handleChange = (evt) => {
		this.updateList(evt.target.value, this.state.sortFlag);
	}

	updateList(input, checked) {
		const updStrings = this.props.strArr.filter(v => v.includes(input));

		if(checked) updStrings.sort();

		this.setState({
			filterVal: input,
			sortFlag: checked,
			strings: updStrings
		})
	}

	render() {
		return(
			<div>
				<UserControl
					isSorted = {this.state.isSorted}
					filterVal = {this.state.filterVal}
					handleCheck = {this.handleCheck}
					handleChange = {this.handleChange}
				/>
				<List
					isSorted = {this.state.isSorted}
					strArr = {this.state.strings}
				/>
			</div>
		)
	}
}

export default Card;
