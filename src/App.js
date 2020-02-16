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
            AirBuddy
          </Heading>
          <Form onFormSubmit = {this.onFormSubmit}/>
        </div>
      );
    } else {
      return (
        <div>
          <Heading>
            AirBuddy
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
  color: blue;
`;