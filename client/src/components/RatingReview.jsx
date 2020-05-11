import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import moment from 'moment';
import 'moment-timezone';
import Moment from 'react-moment';

/*
  <FontAwesomeIcon icon={faHeart}/>
  <FontAwesomeIcon icon={faFlag}/>
*/

class RatingReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    //bind functions here

  }

  componentDidMount() {
  }

  render() {
    console.log("Rendering review", this.props.review);
    return (
        <Container className="reviewBar">
            <Row style={{width: "100%"}}>
                <Col sm={3}>
                    <div className="userRating">
                        <StarRatings
                            rating={this.props.review.rating || 0}
                            starDimension="24px"
                            starSpacing="4px"
                        />
                    </div>
                    <div className="date"><Moment format="MMM Do, YYYY" date="{this.props.review.date}"></Moment></div>
                    <div className="userName">{this.props.review.name}</div>
                </Col>
                <Col sm={6}>
                    <div className="reviewTitle">{this.props.review.title}</div>
                    <div className="reviewBody">{this.props.review.body}</div>
                </Col>
                <Col sm={3}>
                    <div className="styleChoice"> Watch Style </div>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default RatingReview;
