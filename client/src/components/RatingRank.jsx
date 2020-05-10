import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import StarRatings from 'react-star-ratings';
import { Container, Row, Col } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; //solid heart, solid star
//import { fasHeart } from '@fortawesome/free-regular-core-icons';
//open heart
//open flag
import { faFlag } from '@fortawesome/free-solid-svg-icons';//solid flag

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
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <div class="ratingBar">
                        <div class="overallRating">
                            <div>{this.formatRating(this.props.rankings.overallRating)}</div>
                            <StarRatings
                                rating={this.props.rankings.overallRating}
                                starDimension="40px"
                                starSpacing="15px"
                            />
                        <div>{{this.props.rankings.total}} Ratings</div>
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
                    <div style={{"text-align": "center"}}>{this.props.rankings.total} Ratings</div>
                    {this.props.rankings.breakdowns.map(breakdown => {
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