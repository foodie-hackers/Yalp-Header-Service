import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
  color: blue;
`;

const PostReview = styled.div`
  display: flex;
  vertical-align: middle;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid;
  font-weight: bold;
  text-align: center;
  padding: 12px 19px 4px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  background-color: #d90007;
  border-color: #8d0005;
  color: white;
`;

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
      <div>
        <Title>
          {this.props.restaurantName}
        </Title>
        <form>
          <input/>
        </form>
        <PostReview onClick={this.props.toggleModal}>
          Post Review
        </PostReview>
      </div>
    );
  }
}


export default WriteReviewModal;
