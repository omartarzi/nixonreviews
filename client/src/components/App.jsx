import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.productid = 0;
    this.state = {
        hasMoreReviews: false,
        reviewsPages: {},
        totalReviews: 0,
        product: null
    }

    //bind functions here

  }

  async componentDidMount() {
    // Get the product data for the product we're reviewing,
    // ideally this ID will come from the current route,
    // e.g. if your route is /review/:id
    // Then you get the parameter like this:  this.props.match.params.id
    this.productid = 1;
    await this.getProduct();
    await this.getRankings();
  }

  async getProduct() {
    return axios.get("/product/" + String(this.productid))
    .then(response => {
        this.setState({
            product: response.data.product
        });
    })
    .catch(err => {
        console.log("Error loading product", err);
    });
  }

  async getRankings() {
    return axios.get("/rankings/" + String(this.productid))
    .then(response => {
        this.setState({
            totalReviews: response.data.total,
            rankings: response.data.rankings
        });
    })
    .catch(err => {
        console.log("Error loading product", err);
    });
  }

  async nextPage(page) {
    return axios.get("/reviews/" + String(this.state.productid), {
        params: {
            page: page
        }
    })
    .then(response => {
        let currentCount = Object.keys(this.state.reviewsPages).reduce((total, pageNum) => {
            return this.state.reviewsPages[pageNum].length;
        }, 0);
        currentCount += response.data.reviews.length;
        this.setState({
            reviewsPages[String(page)]: response.data.reviews,
            totalReviews: response.data.total,
            hasMoreReviews: (response.data.total > currentCount)
        });
    })
    .catch(err => {
        console.log("Error getting reviews", err);
    });
  }

  render() {
    return (
      <div>
      <h1 className="header">Reviews</h1>
      <hr className="blackLine"></hr>
      <RatingRank product={this.state.product} rankings={this.state.rankings}></RatingRank>
        <br></br>
        <div className="filtersBar">
          Filters
        </div>
        <br></br>
        <InfiniteScroll
            pageStart={0}
            loadMore={nextPage}
            hasMore={this.state.hasMoreReviews}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {Object.keys(this.state.reviewsPages).map(pageNum => {
                return (
                    {this.state.reviewsPages[pageNum].map(review => {
                        return (
                            <RatingReview review="review"></RatingReview>
                            <br></br>
                            <RatingActions review="review"></RatingActions>
                        );
                    })}
                );
            })}
        </InfiniteScroll>
      </div>
    )
  }
}