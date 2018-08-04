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
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #D32323;
  width: 100%;
`;

const SearchBarBorder = styled.div`
  width: 100%;
  background-color: rgb(189, 31, 31);
  position: absolute;
  bottom: 0;
  height: 27px;
  z-index: 0;
`;


const Div = styled.div`
  display: flex;
  height: 112px;
  font-family: Helvetica;
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
  backgroundColor: stars > 4.5 ? '#D32323' : stars > 3.5 ? '#F15C4F' : stars > 2.5 ? '#FF9242' : stars > 1.5 ? '#FEC011' : stars > 0.5 ? '#F1BD79' : '#CCCCCC',
  borderRadius: 3,
  color: 'white',
  margin: '2px',
  padding: '4px',
});

const halfRating = stars => ({
  background: stars > 4.5 ? 'linear-gradient(to right, #D32323 50%, #CCCCCC 50%)' : stars > 3.5 ? 'linear-gradient(to right, #F15C4F 50%, #CCCCCC 50%)' : stars > 2.5 ? 'linear-gradient(to right, #FF9242 50%, #CCCCCC 50%)' : stars > 1.5 ? 'linear-gradient(to right, #FEC011 50%, #CCCCCC 50%)' : stars > 0.5 ? 'linear-gradient(to right, #F1BD79 50%, #CCCCCC 50%)' : 'linear-gradient(to right, #FF9242 50%, #CCCCCC 50%)',
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
      url: `restaurants/${this.state.id}`,
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
      <Container>
        <SearchBar>
          <img style={{ zIndex: '1' }} alt="" src="https://s3-us-west-1.amazonaws.com/yalp-pictures/YalpHeader.png" />
          <SearchBarBorder />
        </SearchBar>
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
    );
  }
}

const AppWithRouter = withRouter(props => <App {...props} />);

ReactDOM.render(<BrowserRouter>
  <AppWithRouter />
  </BrowserRouter>, document.getElementById('Header'));
