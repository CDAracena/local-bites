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
    this.setOrder = this.setOrder.bind(this)
  }

  state = {
    currentCity: '',
    cityRestaurants: [],
    currentOrder: ''
  }

  userInput = (input) => {
    this.setState({currentCity: input.target.value})
  }

  userCitySearch = () => {
    const urlProxy = "https://cors-anywhere.herokuapp.com/"
    axios.get(`${urlProxy}https://api.yelp.com/v3/businesses/search?location=${this.state.currentCity}&categories=restaurants${this.state.currentOrder}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        Accept: 'application/json'
      }
    }).then(function(response) {
      this.setState({cityRestaurants: response.data.businesses})
    }.bind(this))

  }

  setOrder = (option) => {
    let optionValue;
    if (option.target.value === "Price") {
      optionValue = '&price=1'
    } else if (option.target.value === "Rating") {
      optionValue = '&sort_by=rating'
    }
    this.setState({currentOrder: optionValue})
    if (this.state.currentCity) {
      this.userCitySearch();
    }
  }
  render() {
    return (<div className="app-container container-fluid">
      <Nav searchTerm={this.userInput} searchFunction={this.userCitySearch}/>
      <RestaurantList cityName={this.state.currentCity} restaurants={this.state.cityRestaurants} sortBy={this.setOrder}/>
    </div>)
  }
}

export default App;
