import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    searchField: ''
  };

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const contacts = await response.json();
    this.setState({ contacts });
  }

  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ searchField: value });
  };

  render() {
    const {
      handleChange,
      state: { contacts, searchField }
    } = this;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Rolodex</h1>
        <SearchBox placeholder="Search Contacts" handleChange={handleChange} />
        <CardList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
