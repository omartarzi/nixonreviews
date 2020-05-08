import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; //solid heart
//import { fasHeart } from '@fortawesome/free-regular-core-icons';
//open heart
//open flag
import { faFlag } from '@fortawesome/free-solid-svg-icons';//solid flag


/*
  <FontAwesomeIcon icon={faHeart}/>
  <FontAwesomeIcon icon={faFlag}/>
*/

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    //bind functions here

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <h1 className="header">Reviews</h1>
      <hr className="blackLine"></hr>
        <div className="ratingBar">
          <div id="overallRating">
            <div>5.0 </div>

            <div>Stars</div>
            <div>Number of Ratings</div>
            <br></br>
            <button id="writeAReview">WRITE A REVIEW</button>
          </div>
          <div id="ratingsBarGraph">
          Number of Ratings
          </div>
          <div id="style">
          Watch Style
          </div>
        </div>
        <br></br>
        <div className="filtersBar">
          Filters
        </div>
        <br></br>
        <div className="reviewBar">
          <div id="userInfo">
            <div id="userRating">userRating</div>
            <div id="date">date</div>
            <div id="userName">userName</div>
          </div>
          <div id="reviewInfo">
            <div id="reviewTitle">Review Title 17.5px</div>
            <div id="reviewBody">Review Body</div>
          </div>
          <div id="userStyle">
            <div id="styleChoice"> Watch Style </div>
          </div>
        </div>
        <br></br>
        <div className="toolBar">
          <div id="helpful">Was this helpful?</div>
          <div id="flag">Flag DRAWING</div>
        </div>
      </div>
    )
  }
}