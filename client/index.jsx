import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faCamera, faShareSquare, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faStarHalf, faCamera, faShareSquare, faBookmark);

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

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/restaurants/1',
      dataType: 'json',
    }).then((results) => {
      this.setState({
        name: results[0].name,
        averageRating: results[0].averageRating,
        reviewCount: results[0].reviewCount,
        priceRange: results[0].priceRange,
      });
    });
  }

  render() {
    const Div = styled.div`
      background-color: white;
      display: flex;
      font-family: arial;
    `;

    const HeaderLeft = styled.div`
      display: flex;
      width: 50%;
      padding-left: 20px;
    `;

    const HeaderRight = styled.div`
      display: flex;
      width: 50%;
    `;

    const RestaurantName = styled.div`
      font-weight: bold;
      font-size: 36px;
      padding-top: 6px;
      padding-bottom: 6px;
      line-height: 1.16667em;
      width: 100%;
    `;

    const ReviewInfo = styled.div`
      display: flex;
    `;

    const AverageRating = styled.div`
      float: left;
      margin: -6px 6px 0 0;
      padding-bottom: 6px;
    `;

    const rating = stars => ({
      backgroundColor: stars > 3.5 ? 'red' : stars > 0 ? 'orange' : 'gray',
      color: 'white',
      margin: '2px',
      padding: '4px',
    });

    const halfRating = stars => ({
      background: stars > 3.5 ? 'linear-gradient(to right, red 50%, gray 50%)' : 'linear-gradient(to right, orange 50%, gray 50%)',
      color: 'white',
      margin: '2px',
      padding: '4px',
    });

    const ReviewCount = styled.div`
      display: flex;
      padding: "4px";
      color: #666;
      font-weight: normal;
    `;

    const PriceRange = styled.div`
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    `;

    return (

      <Div className="biz-page-header">
        <HeaderLeft>
          <div className="biz-main-info">
            <RestaurantName>
              {this.state.name}
            </RestaurantName>
            <ReviewInfo>
              <AverageRating>
                {Array(5).fill().map((e, i) => (
                  i + 0.5 === this.state.averageRating
                    ? <FontAwesomeIcon icon="star" style={halfRating(this.state.averageRating)} />
                    : <FontAwesomeIcon icon="star" style={i< this.state.averageRating ? rating(this.state.averageRating) : rating(0)} />
                ))}
              </AverageRating>
              <ReviewCount>
                {this.state.reviewCount} reviews
              </ReviewCount>
            </ReviewInfo>
            <PriceRange>
              {this.state.priceRange === 1 ? '$' : this.state.priceRange === 2 ? '$$' : this.state.priceRange === 3 ? '$$$' : '$$$$'}
            </PriceRange>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="write-review-button">
            <button>Write a Review</button>
          </div>
          <span className="add-photo-button">
            <button>Add Photo</button>
          </span>
          <span className="share-button">
            <button>Share</button>
          </span>
          <span className="save-button">
            <button>Save</button>
          </span>
        </HeaderRight>
      </Div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
