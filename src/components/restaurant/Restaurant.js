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
  <div className="restaurant-card-top-section">
  <div className="row">
    <div className="restaurant-name col-lg-12">
      {name}
    </div>
  </div>
</div>
  <div className="restaurant-card-bottom-section">
  <div className="row price-rating-row">
    <div className="col-lg-6 price-div">
      {price}
    </div>
    <div className="col-lg-6 rating-div">
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
    <div className="col-lg-6 store-open-status">
      {open ? 'Closed' : 'Open!'}
    </div>
    <div className="col-lg-6 store-tel">
      <i className="fa fa-phone-square"></i> {phone}
    </div>
  </div>
</div>
</div>)

export default Restaurant;
