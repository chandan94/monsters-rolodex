import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import './components/search/search.styles.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue : '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => { this.setState({ monsters: users }) });
  }

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monsters Rolodex</h1>
          <Search placeholder={'Search monsters'} handleChange={ e => this.setState({ searchValue : e.target.value })}/>
          <CardList monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
