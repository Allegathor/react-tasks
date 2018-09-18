import React from 'react';

class TextBlock extends React.Component {

	formatText(str) {
		const strArr = str.split(/<br\s?\/*>/g);
		let elems = [];

		strArr.forEach((v, i) => {
			if(i < strArr.length) {
				elems.push(v);
				elems.push(<br key={i} />);
			}
		})

		console.log(elems);

		return elems;
	}

	render() {
		return (
			<p>
				{this.formatText(this.props.children)}
			</p>
		)
	}
}

export default TextBlock;
