import React from 'react';
import styled from 'styled-components';

class Seat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick = () => {
        alert('clicked!');
    }

    onSubmit(event) {
        event.preventDefault();
        alert('submitted!');
    }

    render() {
        return (
          <Main>
            SEAT MAAAP
          </Main>
        );
    }
}

export default Seat;

const Main = styled.div`
  display: flex;
  margin: 114px 0px 0px 0px;
`;