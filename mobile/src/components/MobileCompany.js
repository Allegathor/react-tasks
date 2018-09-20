import React from 'react';

import MobileClient from './MobileClient';
import Editor from './Editor';
import { clientEvents } from '../events';

class MobileCompany extends React.PureComponent {

	state = {
		name: this.props.name,
		clients: this.props.clients
	}

	componentWillMount() {
		clientEvents.addListener('deleteclient', this.deleteClientHandler)
	}

	deleteClientHandler = (id) => {
		if(window.confirm('Удалить?')) {
			const filtClients = this.state.clients.filter(v => (v.id !== id))
			this.setState({
			clients: filtClients

			})
		}
	}

	setName1 = () => {
		this.setState({name: 'Velcom'})
	}

	setName2 = () => {
		this.setState({name: 'МТС'})
	}

	render() {
		const clientElCode = this.state.clients.map(v => (
			<MobileClient
				key={v.id}
				clientData={v}
			/>
		))

		return(
			<div>
				<button onClick={this.setName1}>Velcom</button>
				<button onClick={this.setName2}>МТС</button>
				<h2>Компания: &laquo;{this.state.name}&raquo;</h2>

				<div>
					{clientElCode}
				</div>

				<Editor />

			</div>
		)
	}
}

export default MobileCompany;
