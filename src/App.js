import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';
import Nav from './components/Nav/Nav';
import RestaurantList from './components/restaurant-list/RestaurantList'

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
      <RestaurantList cityName={this.state.currentCity} restaurants={this.state.cityRestaurants}/>
    </div>)
  }
}

export default App;
