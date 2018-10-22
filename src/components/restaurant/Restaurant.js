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
  <div className="row price-rating-row">
    <div className="col-lg-6 price-div col-sm-6 col-xs-6">
      {price}
    </div>
    <div className="col-lg-6 col-sm-6 col-xs-6 rating-div">
      Rating: {rating}
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 link-row">
      <a href={yelpLink}>
        {name}<img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/96b838280c20/assets/img/brand_guidelines/dont_rearrange.png" width="25%" alt="yelp logo"/>
      </a>
    </div>
  </div>
  <div className="row status-phone-row">
    <div className="col-lg-6">
      {open}
    </div>
    <div className="col-lg-6">
      Tel: {phone}
    </div>
  </div>
</div>)

export default Restaurant;
