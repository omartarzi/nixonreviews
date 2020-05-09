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

  toggleLike() {
    // TODO
  }

  toggleDislike() {
    // TODO
  }

  handleReport() {
    // TODO
  }

  render() {
    return (
        <div className="toolBar">
          <Container>
            <Row>
                <Col sm={6}>
                    Was this helpful?
                    <FontAwesomeIcon icon={faHeart} onClick={() => this.toggleLike} />
                    <FontAwesomeIcon icon={faHeart} onClick={() => this.toggleDislike} />
                </Col>
                <Col sm={6} style={{"text-align": "right"}}>
                    <FontAwesomeIcon icon={faFlag} onClick={() => this.handleReport} /> Flag
                </Col>
            </Row>
          </Container>
        </div>
    );
  }
}