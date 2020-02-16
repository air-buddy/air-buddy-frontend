import React from 'react';
import styled from 'styled-components';
import seatMap from './seatmap.json';

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
        this.state = {
            flight: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            flight: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        alert('submitted!');
    }

    render() {
        return (
            <Container width={seatMap.width}>
              {seatMap.seats.map(seat => 
                  <Item>{seat.number}</Item>
              )}
            </Container>
        );
    }
}

export default SeatMap;
