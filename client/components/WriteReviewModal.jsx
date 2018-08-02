import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalBackground = styled.div`
  background-color:green;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 2;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  border: 1px solid #888;
  width: 80%;
  height: 100%;
`;

const Title = styled.div`
  color: #0073bb;
  padding-top: 20px;
  padding-left: 100px;
  padding-bottom: 10px;
  font-size: 36px;
  font-weight: bold;
`;

const Form = styled.div`
  padding-left: 100px;
  width: 50%;
  height: 50%;
`;

const PostReview = styled.div`
  display: flex;
  margin-left: 10%;
  margin-top: 5%;
  vertical-align: middle;
  font-size: 16px;
  width: 10%;
  cursor: pointer;
  border: 1px solid;
  font-weight: bold;
  text-align: center;
  padding: 4px 4px 4px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  background-color: #d90007;
  border-color: #8d0005;
  color: white;
`;

const ReviewText = styled.textarea`
  font-size: 18px;
  width: 100%;
  height: 100%;
`;

const rating = () => ({
  backgroundColor: 'gray',
  color: 'white',
  margin: '2px',
  padding: '4px',
});

class WriteReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Your review helps others learn about great local businesses.\n\nPlease don\'t review this business if you received a freebie for writing this review, or if you\'re connected in any way to the owner or employees.',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <ModalBackground>
        <ModalContent>
          <Title>
            {this.props.restaurantName}
          </Title>
          <Form>
            {Array(5).fill().map(() => (
              <FontAwesomeIcon icon="star" style={rating()} />
            ))}
            <ReviewText placeholder={this.state.value} onChange={this.handleChange}>
            </ReviewText>
          </Form>
          <PostReview onClick={this.props.toggleModal}>
            Post Review
          </PostReview>
        </ModalContent>
      </ModalBackground>
    );
  }
}


export default WriteReviewModal;
