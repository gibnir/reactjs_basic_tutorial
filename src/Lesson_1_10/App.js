import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>hi</h1>;


class App extends React.Component {
  render () {
    let title = this.props.title,
        number = this.props.number,
        text = this.props.text;


    return (
      <div>
        <h1>{title}</h1>
        <span>{number}</span>
        <p>{text}</p>
      </div>
        
      );
  }
}

App.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
  text: PropTypes.string
};

// Specifies the default values for props:
App.defaultProps = {
  title: 'item1',
  number: 'item2',
  text: 'item3'
};


export default App;