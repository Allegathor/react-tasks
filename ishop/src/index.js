import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ProductsTable from './components/ProductsTable';
import Data from './data';

ReactDOM.render(
	<ProductsTable
		productsData = {Data}
	/>,
	document.getElementById('root')
)
