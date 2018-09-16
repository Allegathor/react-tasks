import React from 'react';

class List extends React.Component {
	render() {
		return(
			<ul className='list'>
				{this.props.strArr.map((v, i) => <li key={i}>{v}</li>)}
			</ul>
		)
	}
}

export default List;
