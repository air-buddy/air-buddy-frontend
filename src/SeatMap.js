import React from 'react';
import styled from 'styled-components';

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
          <div>
            SEAT MAAAP
          </div>
        );
    }
}

export default SeatMap;
