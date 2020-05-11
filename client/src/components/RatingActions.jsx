import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
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

class RatingActions extends React.Component {
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
        <div className="toolBar">
          <Container>
            <Row>
                <Col sm={6}>
                    <div>
                        Was this helpful?
                        <span className={{"clickable": true, "liked": (this.props.review.myLike > 0)}}><FontAwesomeIcon icon={faHeart}
                            onClick={this.props.toggleLike} /></span>
                        {(this.props.review.likes > 0) ? this.props.review.likes : ''}
                        <span className={{"clickable": true, "disliked": (this.props.review.myLike > 0)}}><FontAwesomeIcon icon={faHeart}
                            onClick={this.props.toggleDislike} /></span>
                        {(this.props.review.dislikes > 0) ? this.props.review.dislikes : ''}
                    </div>
                </Col>
                <Col sm={6} style={{"textAlign": "right"}}>
                    <div>
                        <span className={{"flagged": this.props.review.flagged}}>
                            <FontAwesomeIcon icon={faFlag}
                                onClick={this.props.flagReview} />
                        </span> Flag
                    </div>
                </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default RatingActions;
