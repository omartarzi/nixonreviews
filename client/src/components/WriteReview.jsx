import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; //close icon, info

class WriteReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        review: {
            rank: 0
        }
    }

    //bind functions here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  closeModal() {
    this.props.onCloseModal();
  }

  handleChange(event, field) {
    this.setState({
        ...this.state,
        review: {
            ...this.state.review,
            [field]: event.target.value
        }
    });
  }

  handleChangeRating(newRating, field) {
    this.setState({
        ...this.state,
        review: {
            ...this.state.review,
            [field]: newRating
        }
    });
  }

  handleUploadImage(event) {
    event.preventDefault();
    // TODO
  }

  handleUploadVideo(event) {
    event.preventDefault();
    // TODO
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <Container>
            <Row>
                <Col sm={12} style={{"text-align": "right"}}>
                    <FontAwesomeIcon icon={faStar} style={{"cursor": "pointer"}} onClick={() => closeModal()} />
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
                    <div>Please share your experience</div>
                    <div>{this.props.product.title}</div>
                    <div>Your feedback will help other shoppers make good choices, and we'll use it to improve our products.</div>
                    <div>Review guidelines</div>
                </Col>
                {this.props.product.images && this.props.product.images[0] && (<Col sm={3}>
                    <img src={this.props.product.images[0]} />
                </Col>)}
                {(!this.props.product.images || !this.props.product.images[0]) && (<Col sm={3}>&nbsp;</Col>)}
            </Row>
            <Row>
                <Col sm={12}>
                    Overall Rating <span class="required">*</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <StarRatings
                        rating={this.state.review.rating}
                        starRatedColor="black"
                        changeRating={this.handleChangeRating}
                        numberOfStars={5}
                        name='rating'
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    Review <span class="required">*</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <textarea rows="5" style={{"width": "100%"}} onChange={(e) => this.handleChange(e, 'content')}>
                        {this.state.review.content}
                    </textarea>
                    <span><FontAwesomeIcon icon={faInfoCircle} /> Make your review great: Describe what you liked, what you didn't like, and other key things shoppers should know (minimum 5 characters)</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    Review Title
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <input type="text" style={{"width": "100%"}} onChange={(e) => this.handleChange(e, 'title')} />
                    <span><FontAwesomeIcon icon={faInfoCircle} /> Your overall impression (150 characters or less)</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    Photos or Videos
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div>
                        <button type="button" class="btn" onClick={this.handleUploadImage}>
                            Add Photo
                        </button>
                        <button type="button" class="btn" onClick={this.handleUploadVideo}>
                            Add Video
                        </button>
                    </div>
                    <span><FontAwesomeIcon icon={faInfoCircle} /> You may add up to five photos or videos</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <input type="submit" value="Submit" />
                </Col>
            </Row>
        </Container>
    );
  }
}