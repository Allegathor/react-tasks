import React from 'react';

import MobileCompany from './MobileCompany';

let companyName = 'Velcom';
let clientsArr = [
	{ id: 101, name: 'Иванов И.И.', balance: 200 },
	{ id: 105, name: 'Сидоров С.С.', balance: 250 },
	{ id: 110, name: 'Петров П.П.', balance: 180 },
	{ id: 120, name: 'Григорьев Г.Г.', balance: 220 }
];

function App(props) {
	console.log('App is rendering...');
	return (
		<div>
			<MobileCompany
				name={companyName}
				clients={clientsArr}
			/>
		</div>
	);
}

export default App;
