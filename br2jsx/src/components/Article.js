import React from 'react';
import PropTypes from 'prop-types';

import TextBlock from './TextBlock';

class Article extends React.Component {

	static propTypes = {
		textContent: PropTypes.string
	}

	render() {
		return (
			<article>
				<TextBlock>
					{this.props.textContent}
				</TextBlock>
			</article>
		)
	}
}

export default Article;
