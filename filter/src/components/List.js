import React from 'react';

class List extends React.Component {
	render() {
		return(
			<ul className='list'>
				{this.props.strArr.map((v, i) => <li>{v}</li>)}
			</ul>
		)
	}
}

export default List;
