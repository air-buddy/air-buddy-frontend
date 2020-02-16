import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: ""
    };
  }

  onChange = event => {
    this.setState({
      flight: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.flight);
  };

  render() {
    return (
      <Main>
        <form onSubmit={this.onSubmit}>
          <FormControl>
            <InputLabel>Flight #: </InputLabel>
            <Input onChange={this.onChange} value={this.state.flight} />
            <Button type="submit" variant="contained">Look up</Button>
          </FormControl>
        </form>
      </Main>
    );
  }
}

export default Form;

const Main = styled.div`
  display: flex;
  margin: 200px 0px auto;
  justify-content: center;
`;
