import React from 'react';
import styled from 'styled-components';

class SeatMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange(event) {
        //
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

export default SeatMap;

const Main = styled.div`
  display: flex;
  margin: 114px 0px 0px 0px;
`;