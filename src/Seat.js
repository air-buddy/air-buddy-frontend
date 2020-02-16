import React from "react";
import styled, { css } from "styled-components";

class Seat extends React.Component {
  // props:
  // number, x, y, available, preferences
  constructor(props) {
    super(props);
    this.state = {
      number: undefined,
      x: undefined,
      y: undefined,
      available: undefined,
      preferences: null
    };
  }

  onClick = () => {
    alert("clicked!");
  };

  onSubmit(event) {
    event.preventDefault();
    alert("submitted!");
  }

  render() {
    if (this.props.available === false) {
      return <Square unavailable />;
    } else if (this.props.preferences === null) {
      return <Square available />;
    } else if (this.props.preferences.likesToTalk) {
      return <Square talkative />;
    } else {
      return <Square stoic />;
    }
  }
}

export default Seat;

const Square = styled.div`
    width: 45px;
    height: 45px;
    ${props =>
      props.unavailable &&
      css`
        background: gray;
        border-radius: 10px;
      `}
    ${props =>
      props.available &&
      css`
        background: #578328;
        border-radius: 10px;
      `}
    ${props =>
      props.talkative &&
      css`
        background: red;
        border-radius: 10px;
      `}
    ${props =>
      props.stoic &&
      css`
        background: black;
        border-radius: 10px;
      `}
`;
