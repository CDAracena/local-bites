import React from 'react';
import './RestaurantList.css';
import Restaurant from '../restaurant/Restaurant'

const RestaurantList = ({restaurants, cityName, sortBy}) => (<div className="restaurants-container container-fluid text-center">
  <div className="row city-option-row">
    <div className="col-lg-6">
      <h1 className="city-name">
        {cityName}
      </h1>
    </div>
    <div className="col-lg-6">
      <span>
        <span className="p-1 h5 sort-text">
          Sort:
        </span>
        <select className="select-tag" onChange={sortBy}>
          <option>
            Select
          </option>
          <option>
            Rating
          </option>
          <option>
            Price
          </option>
        </select>
      </span>
    </div>
  </div>
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
