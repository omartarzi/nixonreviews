import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
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
    return (
        <div className="reviewBar">
            <Container>
                <Row>
                    <Col sm={3}>
                        <div className="userRating"><StarRatingsSprite><span style={{width: String(this.props.review.rating * 100 / 5) + '%'}}></span></StarRatingsSprite></div>
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
        </div>
    );
  }
}

export default RatingReview;
