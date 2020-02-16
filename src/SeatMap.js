import React from "react";
import styled from "styled-components";
// import seatMap from './seatmap.json';
import Seat from "./Seat.js";

const Container = styled.div`
  height: auto;
  width: 350px;
  margin: 0 auto;
  padding: 4em 0;
  border-radius: 15px;
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 50px);
  grid-auto-rows: 50px;
  grid-row-gap: 10px;
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
    alert("submitted!");
  }

  render() {
    const { data } = this.props;
    return (
      <Main>
        <Container width={data.width}>
          <Item col={0}>A</Item>
          <Item col={1}>B</Item>
          <Item col={3}>C</Item>
          <Item col={4}>D</Item>
          {data.seats.map(seat => (
            <Item key={seat.number} col={seat.x}>
              <Seat
                preferences={seat.preferences}
                available={seat.isAvailable}
              />
            </Item>
          ))}
        </Container>
      </Main>
    );
  }
}

export default SeatMap;

const Main = styled.div`
  display: flex;
  margin: 60px 0px 0px 0px;
`;
