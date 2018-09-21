import React from 'react';
import { clientEvents } from '../events';

class Editor extends React.PureComponent {

	state = {
		mode: 0,
		name: '',
		balance: '',
		id: ''
	}

	componentWillMount() {
		clientEvents.addListener('initnamech', this.toggleNameEdit);
		clientEvents.addListener('initbalch', this.toggleBalEdit);
		clientEvents.addListener('clientdel', this.toggleDefault);
	}

	toggleDefault = () => {
		this.setState({
			mode: 0,
			name: '',
			balance: ''
		})
	}

	toggleNameEdit = (id) => {
		this.setState({
			mode: 1,
			id: id
		})
	}

	toggleBalEdit = (id) => {
		this.setState({
			mode: 2,
			id: id
		})
	}

	changeName = (evt) => {
		this.setState({
			name: evt.target.value
		})

	}

	changeBal = (evt) => {
		this.setState({
			balance: evt.target.value
		})

	}

	saveName = () => {
		clientEvents.emit('savename', this.state.id, this.state.name);
		this.setState({
			mode: 0,
			name: ''
		})
	}

	saveBalance = () => {
		clientEvents.emit('savebal', this.state.id, this.state.balance);
		this.setState({
			mode: 0,
			balance: ''
		})
	}

	render() {

		return(
			<div>
				{this.state.mode === 0 &&
					<div>
					</div>
				}

				{this.state.mode === 1 &&
					<fieldset>
						<legend>Редактировать имя</legend>
						<input value={this.state.name} onChange={this.changeName}/>
						<button onClick={this.saveName}>Сохранить</button>
						<button onClick={this.toggleDefault}>Отмена</button>
					</fieldset>
				}

				{this.state.mode === 2 &&
					<fieldset>
						<legend>Редактировать баланс</legend>
						<input value={this.state.balance} onChange={this.changeBal}/>
						<button onClick={this.saveBalance}>Сохранить</button>
						<button onClick={this.toggleDefault}>Отмена</button>
					</fieldset>
			}
			</div>
		)
	}
}

export default Editor;
