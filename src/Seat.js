import React from "react";
import styled, { css } from "styled-components";
import { FaComments, FaCommentSlash } from "react-icons/fa";
import { airMainBlue } from "./Colors";
import Tooltip from './Tooltip.js';

class Seat extends React.Component {
  // props:
  // number, x, y, available, preferences
  constructor(props) {
    super(props);
    this.state = {
      tooltip: false,
      number: undefined,
      x: undefined,
      y: undefined,
      available: undefined,
      preferences: null
    };
  }

  onClick = () => {
    this.setState({tooltip: true});
  };

  onSubmit(event) {
    event.preventDefault();
    alert("submitted!");
  }

  render() {
    var popup = <div />
    if (this.state.tooltip === true) {
      popup = <Tooltip />
    }
    if (this.props.available === false) {
      return (
          <div style={{position: "relative"}}>
              {popup}
              <Square unavailable onClick={this.onClick}/>
          </div>
          );
    } else if (this.props.preferences === null) {
      return (
          <div>
              {popup}
              <Square available onClick={this.onClick}/>
          </div>
      );
    } else if (this.props.preferences.likesToTalk) {
      return (
          <div>
              {popup}
              <FaComments size={45} color={airMainBlue} onClick={this.onClick}/>
          </div>
      );
    } else {
      return (
          <div>
              {popup}
              <FaCommentSlash size={45} color={airMainBlue} onClick={this.onClick}/>
          </div>
      );
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
