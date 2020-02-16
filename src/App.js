import React from 'react';
import './App.css';
import Form from './Form.js';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: ''
    };
  }

  render() {
    if (this.state.flight.length === 0) {
      return (
        <div>
          <Heading>
            AirBuddy
          </Heading>
          <Form />
        </div>
      );
    } else {
      return (
        <div>
          <Heading>
            AirBuddy
          </Heading>
          Put a new component here
        </div>
      );
    }
  }
}

export default App;

const Heading = styled.div`
  color: blue;
`;