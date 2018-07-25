import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Marufuku Ramen',
      averageRating: 4.5,
      reviewCount: 1332,
      priceRange: 2,
    };
  }

  render() {
    return (
      <div className="biz-page-header">
        <div className="biz-page-header-left">
          <div className="restaurant-name">
            <h1>
              {this.state.name}
            </h1>
          </div>
          <div className="biz-main-info">
            <div className="rating">
              {this.state.averageRating}
            </div>
            <div className="reviews">
              {this.state.reviewCount} reviews
            </div>
            <div className="priceRange">
              {this.state.priceRange === 1 ? '$' : this.state.priceRange === 2 ? '$$' : this.state.priceRange === 3 ? '$$$' : '$$$$'}
            </div>
          </div>
        </div>
        <div className="biz-page-header-right">
          <div className="write-review-button">
            <button>Write a Review</button>
          </div>
          <span className="add-photo-button">
            <button>Add Photo</button>
          </span>
          <span classname="share-button">
            <button>Share</button>
          </span>
          <span className="save-button">
            <button>Save</button>
          </span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
