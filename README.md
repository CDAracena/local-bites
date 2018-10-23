# Local Bites
Mobile responsive restaurant web app that utilizes the Yelp Fusion API to fetch the 20 closest restaurants searched in any city or neighborhood. Users can view restaurant data and filter their search according to price, rating or default renders.

# Built With
* React
* Bootstrap
* Axios
* Font Awesome

# Restaurant Cards
Individual restaurant cards all have the same data respective to the individual restaurant. All have the following information:
* Restaurant promo image
* Restaurant name
* Restaurant pricing - Dollar sign system, less $ means cheaper, more $ means more expensive
* Restaurant rating - Ratings run from 1(lowest) to 5 (highest)
* Restaurant Yelp page link - Yelp logo that redirects user to the restaurant's yelp page
* Restaurant current availability - Checks if the restaurant is currently open or closed
* Restaurant phone number - The restaurant's current phone number

# Sections

## Header Navigation
 Search bar where user can input a city or neighborhood, click on search and immediately get results back.
 Sort selector, a drop down selector where the user can filter their results according to price, rating or default. Sort selection will render a new restaurant list only if there's a city in the search bar field.
 
