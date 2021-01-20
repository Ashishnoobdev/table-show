import React from 'react';

import tableContents from './TableContentStructure.json';
import TableView from './Table';
import './App.css';

class App extends React.Component {
  state = {
    searchValue: '',
    items: []
  }

  componentDidMount() {
    // use fetch to get response from API
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((result) => {
      this.setState({ items: result })
    },
    (error) => console.log(error));
    // For error handling
    // this.setState({ items: tableContents });
  };

  onInputChange = (event) => {
    this.setState({ searchValue: event.target.value});
  };

  render() {
    const filteredItem = this.state.items.filter(item => {
      return (
        item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || item.username.toLowerCase().includes(this.state.searchValue.toLowerCase())
      )
    });

    return (
      <div className='main-container'>
        <input className='search-bar' type='search' placeholder='Search Name/Username' onChange={event => this.onInputChange(event)} />
        <TableView tableContents={this.state.searchValue ? filteredItem : tableContents} />
      </div>
    )
  }
};

export default App;
