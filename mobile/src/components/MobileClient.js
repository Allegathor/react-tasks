import React from 'react';

import { clientEvents } from '../events';

class MobileClient extends React.PureComponent {

  state = {
    clientData: this.props.clientData,
  };

  componentWillReceiveProps = (newProps) => {
    this.setState({clientData: newProps.clientData});
	}

	initNameChange = () => {
		clientEvents.emit('initnamech', this.state.clientData.id);
	}

	initBalChange = () => {
		clientEvents.emit('initbalch', this.state.clientData.id);
	}

	delete = () => {
		clientEvents.emit('clientdel', this.state.clientData.id);
	}

  render() {

    //console.log("MobileClient id="+this.state.info.id+" render");

    return (
			<div className='MobileClient'>
				<div className='MobileClientData'>
					<span className='MobileClientName'>{this.state.clientData.name}</span>
					<span className='MobileClientPrice'>{this.state.clientData.balance}</span>
				</div>
				<button onClick={this.initNameChange}>Изменить ФИО</button>
				<button onClick={this.initBalChange}>Изменить баланс</button>
				<button onClick={this.delete}>Удалить</button>
			</div>
		)
  }

}

export default MobileClient;
