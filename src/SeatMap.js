import React from 'react';
import styled from 'styled-components';
import seatMap from './seatmap.json';
import Seat from './Seat.js';

const Container = styled.div`
height: auto;
width: 300px;
margin: 0 auto;
padding: 4em 0;
border-radius: 10%;
background-color: #F5F5F5;
display: grid;
grid-template-columns: repeat(${props => props.width}, 50px);
grid-auto-rows: 50px;
grid-row-gap: 5px;
justify-items: center;
justify-content: center;
`;

const Item = styled.div`
  grid-column: ${props => props.col + 1};
  grid-row: auto;
  height: 100%;
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
    const { data } = this.props;
    return (
      <Main>
        <Container width={seatMap.width}>
          {seatMap.seats.map(seat => 
            <Item key={seat.number} col={seat.x}>
                <Seat preferences={seat.preferences} available={seat.available} />
            </Item>
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