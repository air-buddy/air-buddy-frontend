import React from 'react';
import './App.css';
import Form from './Form.js';
import SeatMap from './SeatMap.js';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: ''
    };
  }

  onFormSubmit = (flight) => {
    this.setState({
      flight: flight
    });
  }

  render() {
    console.log(this.state.flight);
    if (this.state.flight.length === 0) {
      return (
        <div>
          <Heading>
            <Title>AirBuddy</Title>
          </Heading>
          <Form onFormSubmit = {this.onFormSubmit}/>
        </div>
      );
    } else {
      return (
        <div>
          <Heading>
            <Title>AirBuddy</Title>
          </Heading>
          <p>Flight {this.state.flight}</p>
          <SeatMap />
        </div>
      );
    }
  }
}

export default App;

const Heading = styled.div`
  position: absolute;
  width: 1440px;
  height: 114px;
  left: 0px;
  top: 0px;
  background: #62A8C2;
`;

const Title = styled.p`
  position: absolute;
  width: 290px;
  // height: 82px;
  // left: 155px;
  // top: 16px;
  margin: 16px 155px;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 82px;
  /* identical to box height */
  color: #FFFFFF;
`;
