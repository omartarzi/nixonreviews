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
                    Was this helpful?
                    <FontAwesomeIcon icon={faHeart}
                        className={"liked": (this.props.review.myLike > 0)}
                        onClick={this.props.toggleLike} />
                    {(this.props.review.likes > 0) ? this.props.review.likes : ''}
                    <FontAwesomeIcon icon={faHeart}
                        className={"disliked": (this.props.review.myLike > 0)}
                        onClick={this.props.toggleDislike} />
                    {(this.props.review.dislikes > 0) ? this.props.review.dislikes : ''}
                </Col>
                <Col sm={6} style={{"textAlign": "right"}}>
                    <FontAwesomeIcon icon={faFlag}
                        className={"flagged": this.props.review.flagged}
                        onClick={this.props.flagReview} /> Flag
                </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default RatingActions;
