import React from 'react';

import MobileClient from './MobileClient';
import Editor from './Editor';
import { clientEvents } from '../events';

class MobileCompany extends React.PureComponent {

	state = {
		name: this.props.name,
		clients: this.props.clients,
		filterType: 0,
	}

	componentWillMount() {
		clientEvents.addListener('clientdel', this.deleteClientHandler)
		clientEvents.addListener('savename', this.saveName);
		clientEvents.addListener('savebal', this.saveBalance);
		clientEvents.addListener('addnew', this.addClient);
	}

	addClient = (name, balance) => {
		const id = Math.floor(Math.random() * 1001);
		const newClients = [...this.state.clients, {id, name, balance}];
		this.setState({
			clients: newClients
		})
	}

	saveName = (id, name) => {
		const newClients = this.state.clients.map(v => (
			v = (v.id === id) ? {...v, name: name} : v
		))

		this.setState({
			clients: newClients
		})
	}

	saveBalance = (id, bal) => {
		const newClients = this.state.clients.map(v => (
			v = (v.id === id) ? {...v, balance: parseFloat(bal)} : v
		))

		this.setState({
			clients: newClients
		})

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

	showActive = () => {
		this.setState({
			filterType: 1
		})
	}

	showBlocked = () => {
		this.setState({
			filterType: 2
		})
	}

	showAll = () => {
		this.setState({
			filterType: 0
		})
	}

	render() {
		console.log('MobileCompany is rendering...');

		let compare = null;

		if(this.state.filterType === 1) {
			compare = v => (v >= 0);
		} else if(this.state.filterType === 2) {
			compare = v => (v < 0);
		}

		const filtClients = compare ? this.state.clients.filter(v => (compare(v.balance))) : this.state.clients;

		const clientElCode = <div>
			{filtClients.map(v => (
				<MobileClient
					key={v.id}
					clientData={v}
				/>
			))}
		</div>

		/*const clientElCode = <div>
			{(this.state.filterType === 0) &&
				<div>
					{this.state.clients.map(v => (
						<MobileClient
							key={v.id}
							clientData={v}
						/>
					))}
				</div>
			}
			{(this.state.filterType === 1) &&
				<div>
					{this.state.clients.map(v => (
						(v.balance >= 0) ?
						<MobileClient
							key={v.id}
							clientData={v}
						/> : null
					))}
				</div>
			}
			{(this.state.filterType === 2) &&
				<div>
					{this.state.clients.map(v => (
						(v.balance < 0) ?
						<MobileClient
							key={v.id}
							clientData={v}
						/> : null
					))}
				</div>
			}
		</div>;*/

		return(
			<div>
				<button onClick={this.setName1}>Velcom</button>
				<button onClick={this.setName2}>МТС</button>
				<h2>Компания: &laquo;{this.state.name}&raquo;</h2>

				<div>
					<button onClick={this.showAll}>Все</button>
					<button onClick={this.showActive}>Активные</button>
					<button onClick={this.showBlocked}>Заблокированные</button>
				</div>

				<div>
					{clientElCode}
				</div>

				<Editor />

			</div>
		)
	}
}

export default MobileCompany;
