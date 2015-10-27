import React from 'react';
import Header from './Header';
import IO from 'socket.io-client';

export default class App extends React.Component {
  state = {
    status : 'disconnected'
  }
  constructor() {
    super();
    this.socket = IO('http://localhost:3000');
    this.connect = this.connect.bind(this);
  }
  componentWillMount() {
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  }
  connect() {
    this.setState({ status : 'connected' });
  }
  disconnect() {
    this.setState({ status : 'disconnected'});
  }
  render() {
    return (
      <Header title='New Header' status={this.state.status}/>
    );
  }
}
