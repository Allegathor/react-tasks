import React from 'react';

import { clientEvents } from '../events';

class MobileClient extends React.PureComponent {

  state = {
    clientData: this.props.clientData,
  };

  componentWillReceiveProps = (newProps) => {
    this.setState({clientData: newProps.clientData});
	};

	delete = () => {
		clientEvents.emit('deleteclient', this.state.clientData.id);
	}

  render() {

    //console.log("MobileClient id="+this.state.info.id+" render");

    return (
			<div>
				<span>{this.state.clientData.name}</span>
				<span>{this.state.clientData.balance}</span>
				<button>Изменить ФИО</button>
				<button>Изменить баланс</button>
				<button onClick={this.delete}>Удалить</button>
			</div>
		)
  }

}

export default MobileClient;
