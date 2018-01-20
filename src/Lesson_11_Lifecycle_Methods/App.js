import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val + 1
    });
  }

  componentWillMount () {
    console.log('componentWillMount');
  }
  
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  componentDidUpdate () {
    console.log('componentDidUpdate');
  }
  // componentWillUpdate() {}

  render () {
    console.log('render');
    console.log(this);

    return <button onClick={this.update}>{this.state.val}</button>;
  }

  componentDidMount () {
    console.log('componentDidMount');
  }
}

class Wrapper extends React.Component {
  mount () {
    ReactDOM.render(
        <App />,
        document.getElementById('a'));
  }
  unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render () {
    return (
        <div>
      <button onClick={this.mount.bind(this)}>mount</button>
      <button onClick={this.unmount.bind(this)}>unmount</button>
      <div id='a'></div>
    </div>
      );
  }
}

export default Wrapper;