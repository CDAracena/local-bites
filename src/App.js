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
    currentCity: '',
    cityRestaurants: [],
    currentOrder: ''
  }

  userInput = (input) => {
    this.setState({
      currentCity: input.target.value
    }, function() {})
  }

  userCitySearch = () => {
    const urlProxy = "https://cors-anywhere.herokuapp.com/"
    axios.get(`${urlProxy}https://api.yelp.com/v3/businesses/search?location=${this.state.currentCity}&categories=restaurants`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        Accept: 'application/json'
      }
    }).then(function(response) {
      this.setState({
        cityRestaurants: response.data.businesses
      }, function() {})
    }.bind(this))

  }

  render() {
    return (<div className="app-container container-fluid">
      <Nav searchTerm={this.userInput} searchFunction={this.userCitySearch}/>
    </div>)
  }
}

export default App;
