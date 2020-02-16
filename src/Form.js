import React from "react";
import styled from "styled-components";

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
          <label>
            Flight #:
            <input onChange={this.onChange} value={this.state.flight} />
          </label>
          <button>Look up</button>
        </form>
      </Main>
    );
  }
}

export default Form;

const Main = styled.div`
  display: flex;
  margin: 114px 0px 0px 0px;
`;
