import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './index.css';

console.log(axios);


class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="app-container">
        <div className="app-title h1 text-center">
          Local Bites
        </div>
      </div>
    )
  }
}

export default App;
