import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; //solid heart, solid star
//import { fasHeart } from '@fortawesome/free-regular-core-icons';
//open heart
//open flag
import { faFlag } from '@fortawesome/free-solid-svg-icons';//solid flag

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

ReactModal.setAppElement('#app');

class RatingRank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        showReviewModal: false
    }

    //bind functions here
    this.showReviewModal = this.showReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
  }

  formatRating(val) {
    return new Intl.NumberFormat('en-IN', {
        style: 'decimal',
        minimumFractionDigits: 1
    }).format(val);
  }

  componentDidMount() {

  }

  showReviewModal () {
    this.setState({ showReviewModal: true });
  }
  
  closeReviewModal () {
    this.setState({ showReviewModal: false });
  }

  render() {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <div class="ratingBar">
                        <div class="overallRating">
                            <div>{this.formatRating(this.state.reviewStats.overallRating)}</div>
                            <StarRatingsSprite><span style={{width: String(this.state.reviewStats.overallRating * 100 / 5) + '%'}}></span></StarRatingsSprite>
                        <div>{{this.state.reviewStats.ratingCount}} Ratings</div>
                        <br></br>
            			<button
            				type='button'
            				onClick={() => this.showReviewModal()}
            			>
            				WRITE A REVIEW
            			</button>
                        <ReactModal 
                           isOpen={this.state.showReviewModal}
                           contentLabel="Minimal Modal Example"
                        >
                            <WriteReview onCloseModal={() => this.state.closeReviewModal()}></WriteReview>
                        </ReactModal>
                    </div>
                </Col>
                <Col sm={4}>
                    <div style={{"text-align": "center"}}>{this.state.reviewStats.ratingBreakdowns.reduce((total, breakdown) => total + breakdown.count, 0)} Ratings</div>
                    {this.state.review.ratingBreakdowns.map(breakdown => {
                        return (
                            <div>
                                <FontAwesomeIcon icon={faStar} />
                                <span style={{width: "20px", "text-align": "center"}}>{breakdown.level}</span>
                                <RectangleBackground>
                                    <span style={{width: String(breakdown.pct) + '%'}}></span>
                                </RectangleBackground>
                                <span style={{width: "30px"}}>{breakdown.pct}%</span>
                            </div>
                        );
                    })
                </Col>
                <Col sm={4}>
                    TODO
                </Col>
            </Row>
    )
  }
}