import React from 'react';

import TableView from './Table';
import './App.css';

class App extends React.Component {
  state = {
    searchValue: '',
    items: [],
    sort: {
      column: null,
      direction: 'desc'
    }
  };

  componentWillMount() {
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

  onSort = (column) => (e) => {
    // console.log(this.state.sort);
    const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    // console.log(direction);
    const sortedData = this.state.items.sort((a,b) => {
      const nameA = a.name;
      const nameB = b.name;
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });

    // console.log(this.state.items);
    if(direction === 'desc') {
      sortedData.reverse();
    }

    this.setState({ 
      items: sortedData,
      sort: {
        column,
        direction
      }
    });
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
        <TableView tableContents={this.state.searchValue ? filteredItem : this.state.items} onSort={this.onSort('Name')} />
      </div>
    )
  }
};

export default App;
