import React from 'react';
import styled from 'styled-components';
import { FaSquare } from 'react-icons/fa';

export default () => (
  <div>
    <h3>Passengers</h3>
    <Info>
      <Square/>
      <div>
        <p>VICKY WU</p>
        <p>Main Cabin</p>
      </div>
    </Info>
  </div>
);

const Info = styled.div`
 display: inline-grid;
 grid-template-columns: 60px auto;
 p {
   margin: 0
 }
`;

const Square = styled.div`
    width: 45px;
    height: 45px;
    transition: transform 150ms;
    background: #578328;
    border-radius: 10px;
    cursor: pointer;
`;