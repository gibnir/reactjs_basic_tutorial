import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}

class Buttons extends React.Component {
  
  constructor () {
    super();
    this.state = { selected: 'None'}
  }

  selectedItem (selected) {
    this.setState({selected});
  }

  render () {

    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectedItem.bind(this, child.props.value)
    });

    console.log(this.props.children);
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You have been selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default App;