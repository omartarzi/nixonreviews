import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Moment from 'react-moment';

const StarRatingsSprite = styled.div`
    background: url("star-rating-sprite.png") repeat-x;
    font-size: 0;
    height: 21px;
    line-height: 0;
    overflow: hidden;
    text-indent: -999em;
    width: 110px;
    margin: 0 auto;

    > span {
        background: url("star-rating-sprite.png") repeat-x;
        background-position: 0 100%;
        float: left;
        height: 21px;
        display:block;
    }
`;


/*
  <FontAwesomeIcon icon={faHeart}/>
  <FontAwesomeIcon icon={faFlag}/>
*/

class RatingRank extends React.Component {
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
        <div class="reviewBar">
            <Container>
                <Row>
                    <Col sm={3}>
                        <div class="userRating"><StarRatingsSprite><span style={{width: String(this.state.review.rating * 100 / 5) + '%'}}></span></StarRatingsSprite></div>
                        <div class="date"><Moment format="MMM Do, YYYY" date="{this.state.review.date}"></Moment></div>
                        <div class="userName">{this.state.review.username}</div>
                    </Col>
                    <Col sm={6}>
                        <div class="reviewTitle">{this.state.review.title}</div>
                        <div class="reviewBody">{this.state.review.body}</div>
                    </Col>
                    <Col sm={3}>
                        <div class="styleChoice"> Watch Style </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}