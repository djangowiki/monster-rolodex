import React, { Component } from 'react';

// Components
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';
import './App.css';

class App extends Component {
  // State
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  // Fetch Data
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));

    // .then((data) => console.log(data));
  }

  // handleChange
  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className='App'>
        {/* <input
        // type='search'
        // placeholder='search monsters'
        // onChange={(e) => this.setState({ searchText: e.target.value })}

        // onChange={(e) => {
        //   this.setState({ searchText: e.target.value });
        //   console.log(this.state);
        // }}
        // onChange={(e) => {
        //   this.setState({ searchText: e.target.value }, () =>
        //     console.log(this.state)
        //   );
        // }}
        /> */}

        {/* {console.log(this.state)} */}
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList> */}
        {/* <CardList /> */}
      </div>
    );
  }
}

export default App;
