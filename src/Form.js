import React from "react";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  CircularProgress
} from "@material-ui/core";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: "",
      isLoading: false
    };
  }

  onChange = event => {
    this.setState({
      flight: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.props.onFormSubmit(this.state.flight);
  };

  render() {
    return (
      <Main>
        <form onSubmit={this.onSubmit}>
          <FormControl>
            <InputLabel>Flight #: </InputLabel>
            <Input
              onChange={this.onChange}
              value={this.state.flight}
              disabled={this.state.isLoading}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={this.state.isLoading}
            >
              {this.state.isLoading ? (
                <CircularProgress size={24} />
              ) : (
                "Look up"
              )}
            </Button>
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
