import React from "react";
import styled, { css } from "styled-components";
import { FaComments, FaCommentSlash } from "react-icons/fa";
import { airMainBlue } from "./Colors";
import Tooltip from "./Tooltip.js";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

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

  render() {
    return (
      <Tippy
        enabled={this.props.available}
        content={<Tooltip />}
        interactive={true}
        trigger="click"
        theme="light"
      >
        <div>{this.renderTarget()}</div>
      </Tippy>
    );
  }

  renderTarget() {
    if (this.props.available === true) {
      return <Square available />;
    } else if (this.props.preferences === null) {
      return <Square unavailable />;
    } else if (this.props.preferences.likesToTalk) {
      return (
        <Square talkative>
          <FaComments size={45} color={airMainBlue} />
        </Square>
      );
    } else {
      return (
        <Square stoic>
          <FaCommentSlash
            size={45}
            color={airMainBlue}
            onClick={this.onClick}
          />
        </Square>
      );
    }
  }
}

export default Seat;

const Square = styled.div`
    width: 45px;
    height: 45px;
    transition: transform 150ms;
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
        cursor: pointer;

        &:hover {
          background: #689c2f;
          transform: scale(1.05);
        }
      `}
    ${props =>
      props.talkative &&
      css`
        background: lightgrey;
        border-radius: 10px;
      `}
    ${props =>
      props.stoic &&
      css`
        background: lightgrey;
        border-radius: 10px;
      `}
`;
