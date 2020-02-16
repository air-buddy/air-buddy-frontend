import React from 'react';
import styled from 'styled-components';
import seatMap from './seatmap.json';
import Seat from './Seat.js';

const Container = styled.div`
height: auto;
width: 430px;
margin: 0 auto;
padding: 2em 0;
border: 2px solid gray;
display: grid;
grid-template-columns: repeat(${props => props.width - 1}, 50px);
grid-auto-rows: 40px;
grid-row-gap: 15px;
justify-items: center;
justify-content: center;
`;

const Item = styled.div`
  grid-column: auto;
  grid-row: auto;
  height: 40px;
  width: 40px;
  background-color: lightgray;
  border-radius: 5%;
`;

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
            <Container width={seatMap.width}>
              {seatMap.seats.map(seat => 
                  <Item><Seat preferences={seat.preferences} available /></Item>
              )}
            </Container>
          </Main>
        );
    }
}

export default SeatMap;

const Main = styled.div`
  display: flex;
  margin: 114px 0px 0px 0px;
`;