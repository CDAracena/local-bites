import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './index.css';
import Nav from './components/Nav/Nav';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.userInput = this.userInput.bind(this);
    this.userCitySearch = this.userCitySearch.bind(this);
  }

  state = {
    currentCity: ''
  }

  userInput = (input) => {
    this.setState({
      currentCity: input.target.value
    }, function() {})
  }

  userCitySearch = () => {}

  render() {
    return (<div className="app-container container-fluid">
      <Nav searchTerm={this.userInput}/>
    </div>)
  }
}

export default App;
