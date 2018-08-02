import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCamera, faShareSquare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import WriteReviewModal from './components/WriteReviewModal.jsx';

library.add(faStar, faCamera, faShareSquare, faBookmark);

const Container = styled.div`
  display: flex;
  height: 112px;
  background-color: #f5f5f5;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  font-family: Helvetica Neue;
  width: 960px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const RestaurantName = styled.div`
  font-weight: bold;
  font-size: 36px;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AverageRating = styled.div`
  float: left;
  padding-right: 4px;
`;

const rating = stars => ({
  backgroundColor: stars > 3.5 ? 'red' : stars > 0 ? 'orange' : 'gray',
  borderRadius: 3,
  color: 'white',
  margin: '2px',
  padding: '4px',
});

const halfRating = stars => ({
  background: stars > 3.5 ? 'linear-gradient(to right, red 50%, gray 50%)' : 'linear-gradient(to right, orange 50%, gray 50%)',
  borderRadius: 3,
  color: 'white',
  margin: '2px',
  padding: '4px',
});

const ReviewCount = styled.div`
  display: flex;
  color: #666;
  font-weight: normal;
`;

const PriceRange = styled.div`
  display: flex;
  align-items: flex-start;
`;

const WriteReview = styled.div`
  display: flex;
  margin: 12px 12px 16px 16px;
`;

const ReviewButton = styled.div`
  display: flex;
  width: 125px;
  height: 17px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid;
  font-weight: bold;
  align-items: center;
  padding: 8px 19px 9px 12px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  background-color: #d90007;
  border-color: #8d0005;
  color: white;
`;

const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  padding-top: 6px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  color: #666;
  height: 18px;
  background-color: white;
  padding: 5px 8px 5px 8px;
  font-size: 12px;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  border-color: #ccc;
  border: 1px solid;
  border-top-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  border-radius: 3px;
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
`;

const PhotoShareSave = styled.div`
  display: flex;
  font-weight: 700;
`;

const Box = styled.div`
  display: flex;
  width: 405px;
  align-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.pathname.substr(1),
      name: 'Marufuku Ramen',
      averageRating: 4.5,
      reviewCount: 1332,
      priceRange: 2,
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/restaurants/${this.state.id}`,
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

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  render() {
    return (
      <div>
        <img alt="" src="https://s3-us-west-1.amazonaws.com/yalp-pictures/YalpHeader.png" />
        <Container>
          <Div>
            <HeaderLeft>
                <RestaurantName>
                  {this.state.name}
                </RestaurantName>
                <ReviewInfo>
                  <AverageRating>
                    {Array(5).fill().map((e, i) => (
                      i + 0.5 === this.state.averageRating
                        ? <FontAwesomeIcon icon="star" style={halfRating(this.state.averageRating)} />
                        : <FontAwesomeIcon icon="star" style={i < this.state.averageRating ? rating(this.state.averageRating) : rating(0)} />
                    ))}
                  </AverageRating>
                  <ReviewCount>
                    {this.state.reviewCount} reviews
                  </ReviewCount>
                </ReviewInfo>
                <PriceRange>
                  {this.state.priceRange === 1 ? '$' : this.state.priceRange === 2 ? '$$' : this.state.priceRange === 3 ? '$$$' : '$$$$'}
                </PriceRange>
            </HeaderLeft>
            {this.state.modalIsOpen
              && (
                <WriteReviewModal
                  restaurantName={this.state.name}
                  toggleModal={this.toggleModal}
                />
              )}
            <HeaderRight>
              <Box>
                <WriteReview>
                  <ReviewButton onClick={this.toggleModal}>
                    <StarIcon>
                      <FontAwesomeIcon icon="star" />
                    </StarIcon>
                    Write a Review
                  </ReviewButton>
                </WriteReview>
                <PhotoShareSave>
                  <Button>
                    <Icon>
                      <FontAwesomeIcon icon="camera" />
                    </Icon>
                    Add&nbsp;Photo
                  </Button>
                  <Button>
                    <Icon>
                      <FontAwesomeIcon icon="share-square" />
                    </Icon>
                    Share
                  </Button>
                  <Button>
                    <Icon>
                      <FontAwesomeIcon icon="bookmark" />
                    </Icon>
                    Save
                  </Button>
                </PhotoShareSave>
              </Box>
            </HeaderRight>
          </Div>
        </Container>
      </div>
    );
  }
}

const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(<BrowserRouter>
  <AppWithRouter />
  </BrowserRouter>, document.getElementById('Header'));
