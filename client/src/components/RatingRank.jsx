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
    margin-bottom: 4px;

    span {
        display: inline-block;
        height: 100%;
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
        <div style={{"textAlign": "left"}}>
            <div className="ratingBar">
                <div className="overallRating">
                    <div>{this.formatRating(this.props.rankings.overallRating)}</div>
                    <div style={{"textAlign": "left"}}>
                        <StarRatings
                            rating={this.props.rankings.overallRating || 0}
                            starDimension="40px"
                            starSpacing="15px"
                        />
                    </div>
                    <div>{this.props.rankings.total} Ratings</div>
                </div>
                <ReactModal 
                   isOpen={this.state.showReviewModal}
                   contentLabel="Minimal Modal Example"
                >
                    <WriteReview onCloseModal={() => this.state.closeReviewModal()}></WriteReview>
                </ReactModal>
            </div>
            {this.props.rankings.breakdowns.map(breakdown => {
                return (
                    <div key={breakdown.level}>
                        <FontAwesomeIcon icon={faStar} />
                        <span style={{width: "20px", "textAlign": "center"}}>{breakdown.level}</span>
                        <RectangleBackground>
                            <span style={{width: String(breakdown.pct) + '%'}}>&nbsp;</span>
                        </RectangleBackground>
                        <span style={{width: "30px"}}>{breakdown.pct}%</span>
                    </div>
                );
            })}
            <br />
            <div>
    			<button
    				type='button'
    				onClick={() => this.showReviewModal()}
    			>
    				WRITE A REVIEW
    			</button>
    		</div>	
        </div>
    )
  }
}

export default RatingRank;
