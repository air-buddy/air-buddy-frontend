import React from 'react';
import './App.css';
import Form from './Form.js';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Heading>
          AirBuddy
        </Heading>
        <Form />
      </div>
    );
  }
}

export default App;

const Heading = styled.div`
  color: blue;
`;