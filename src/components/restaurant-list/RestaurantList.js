import React from 'react';
import './RestaurantList.css';
import Restaurant from '../restaurant/Restaurant'

const RestaurantList = ({restaurants, cityName}) => (<div className="restaurants-container container-fluid text-center">
  <h1 className="city-name">
    {cityName}
  </h1>
  <ul className="restaurant-list">
    {
      restaurants.map(restaurant => <li key={restaurant.id}>
        <Restaurant name={restaurant.name} price={restaurant.price} rating={restaurant.rating} yelpLink={restaurant.url} open={restaurant.is_closed
            ? 'Open!'
            : 'Closed'} phone={restaurant.phone}/>
      </li>)
    }
  </ul>
</div>)

export default RestaurantList;
