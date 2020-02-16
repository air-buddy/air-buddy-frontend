import React from "react";
import styled, { css } from "styled-components";
import { FaComments, FaCommentSlash } from "react-icons/fa";
import { airMainBlue } from "./Colors";

export default () => (
  <div>
    <h3>Legend</h3>
    <Info>
      <Square available />
      <div>
        <p>Available</p>
      </div>
      <Square unavailable />
      <div>
        <p>Unavailable</p>
      </div>
      <Square talkative>
        <FaComments size={45} color={airMainBlue} />
      </Square>
      <div>
        <p>Talkative</p>
      </div>
      <Square stoic>
        <FaCommentSlash size={45} color={airMainBlue} />
      </Square>
      <div>
        <p>Taciturn</p>
      </div>
    </Info>
  </div>
);

const Info = styled.div`
 display: inline-grid;
 grid-template-columns: 60px auto;
 grid-template-rows: auto;
 align-content: center;
 p {
   margin: 0
   align-self: center;
 }
`;

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
