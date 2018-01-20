import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  getDataFromAPI () {
    const url = 'https://swapi.co/api/people/?format=json';

    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },networkError => console.log(networkError.message))
    .then(jsonResponse  => {
      console.log('jsonResponse: ' , jsonResponse)
      return this.setState({
        items: jsonResponse.results
      });
    });
  }

  componentWillMount () {
    console.log('componentWillMount');
    this.getDataFromAPI();
  }

  filter (e) {
    this.setState({filter: e.target.value});
  }

  render () {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }

    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map(item => <Person key={item.name} person={item} />)}
      </div>
      );
  }
}

const Person = (props) =>  <h1>{props.person.name}</h1>;

export default App;