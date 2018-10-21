import React from 'react';
import './restaurant.css';

const Restaurant = ({
  name,
  price,
  rating,
  yelpLink,
  open,
  phone
}) => (<div className="restaurant-card-container">
  <div className="row">
    <div className="restaurant-name col-lg-12">
      {name}
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      {price}
    </div>
    <div className="col-lg-6">
      {rating}
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <a href={yelpLink}>
        {name}
        on Yelp
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      {open}
    </div>
    <div className="col-lg-6">
      Tel: {phone}
    </div>
  </div>
</div>)

export default Restaurant;
