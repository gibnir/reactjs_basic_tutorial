import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    );
  }
}

class Parent extends React.Component {
  render () {
    // let items = this.props.children.map(child => child);
    // .map won't work with single child so need to use React.Children.map() . for example:
    // let items = React.Children.map(this.props.children, child => child);
    // let items = React.Children.toArray(this.props.children); equal to line 19
    let items = React.Children.forEach(this.props.children, child => console.log(child.props.className));
    // let items = React.Children.only(this.props.children); // only for one child
    console.log(items);
    return null;
  }
}

export default App;