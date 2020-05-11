import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import StarRatings from 'react-star-ratings';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; //solid heart, solid star
//import { fasHeart } from '@fortawesome/free-regular-core-icons';
//open heart
//open flag
import { faFlag } from '@fortawesome/free-solid-svg-icons';//solid flag
import WriteReview from './WriteReview.jsx';

/*
  <FontAwesomeIcon icon={faHeart}/>
  <FontAwesomeIcon icon={faFlag}/>
*/

const RectangleBackground = styled.div`
    display: inline-block;
    width: 80%;
    height: 24px;
    background-color: #999999;

    span {
        background-color: #000000;
    }
`;

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
    return new Intl.NumberFormat('en-US', {
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
    console.log("In RatingRank render", this.props);
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <div className="ratingBar">
                        <div className="overallRating">
                            <div>{this.formatRating(this.props.rankings.overallRating)}</div>
                            <StarRatings
                                rating={this.props.rankings.overallRating || 0}
                                starDimension="40px"
                                starSpacing="15px"
                            />
                        </div>
                        <div>{this.props.rankings.total} Ratings</div>
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
                    <div style={{"textAlign": "center"}}>{this.props.rankings.total} Ratings</div>
                    {this.props.rankings.breakdowns.map(breakdown => {
                        return (
                            <div>
                                <FontAwesomeIcon icon={faStar} />
                                <span style={{width: "20px", "textAlign": "center"}}>{breakdown.level}</span>
                                <RectangleBackground>
                                    <span style={{width: String(breakdown.pct) + '%'}}></span>
                                </RectangleBackground>
                                <span style={{width: "30px"}}>{breakdown.pct}%</span>
                            </div>
                        );
                    })}
                </Col>
                <Col sm={4}>
                    TODO
                </Col>
            </Row>
        </Container>
    )
  }
}

export default RatingRank;
