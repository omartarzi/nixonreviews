import "regenerator-runtime/runtime";
import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import RatingRank from './RatingRank.jsx';
import RatingReview from './RatingRank.jsx';
import RatingActions from './RatingRank.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.productid = 0;
    this.state = {
        hasMoreReviews: false,
        reviewsPages: {},
        totalReviews: 0,
        product: null,
        rankings: {
            total: 0,
            overallRating: 0,
            breakdowns: []
        },
        reviews: []
    }

    //bind functions here
    this.nextPage = this.nextPage.bind(this);
  }

  async componentDidMount() {
    // Get the product data for the product we're reviewing,
    // ideally this ID will come from the current route,
    // e.g. if your route is /review/:id
    // Then you get the parameter like this:  this.props.match.params.id
    this.productid = "5eb8d428ed8ed105c916a200";
    await this.getProduct();
    await this.getRankings();
  }

  async getProduct() {
    return axios.get("/api/product/" + String(this.productid))
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
    return axios.get("/api/rankings/" + String(this.productid))
    .then(response => {
        console.log("Got rankings", response.data);
        this.setState({
            totalReviews: response.data.rankings.total,
            rankings: response.data.rankings
        });
    })
    .catch(err => {
        console.log("Error loading product", err);
    });
  }

  async toggleLike(review) {
    if (!review.myLike) {
        review.myLike = 1;
        review.likes++;
        let reviews = this.state.reviews.splice(0);
        let pos = reviews.findIndex(r => {
            return r._id === review._id;
        });
        this.setState({
            reviews: reviews.splice(pos, 1, review)
        });
        await axios.post("/api/reviewlike/" + String(review._id));
    }
  }

  async toggleDislike(review) {
    if (!review.myLike) {
        review.myLike = -1;
        review.dislikes++;
        let reviews = this.state.reviews.splice(0);
        let pos = reviews.findIndex(r => {
            return r._id === review._id;
        });
        this.setState({
            reviews: reviews.splice(pos, 1, review)
        });
        await axios.post("/api/reviewdislike/" + String(review._id));
    }
  }

  async flagReview(review) {
    review.flagged = true;
    let reviews = this.state.reviews.splice(0);
    let pos = reviews.findIndex(r => {
        return r._id === review._id;
    });
    this.setState({
        reviews: reviews.splice(pos, 1, review)
    });
    // TODO:  Save
  }

  async nextPage(page) {
    return axios.get("/api/reviews/" + String(this.state.productid), {
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
            reviewsPages: {
                ...this.state.reviewsPages,
                [String(page)]: response.data.reviews,
            },
            totalReviews: response.data.total,
            hasMoreReviews: (response.data.total > currentCount)
        });
    })
    .catch(err => {
        console.log("Error getting reviews", err);
    });
  }

  render() {
    console.log("In render");
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
            loadMore={this.nextPage}
            hasMore={this.state.hasMoreReviews}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {Object.keys(this.state.reviewsPages).map(pageNum => {
                return (
                    this.state.reviewsPages[pageNum].map(review => {
                        return (
                            <>
                                <RatingReview review="review"></RatingReview>
                                <br/>
                                <RatingActions review="review"
                                    toggleLike={() => this.toggleLike(review)}
                                    toggleDislike={() => this.toggleDislike(review)}
                                    flagReview={() => this.flagReview(review)}
                                    ></RatingActions>
                            </>
                        );
                    })
                );
            })}
        </InfiniteScroll>
      </div>
    )
  }
}

export default App;
