import React from "react";
import styled from "styled-components";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talker: false,
      stoic: false
    };
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      talker: false,
      stoic: false,
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const likesToTalk = this.state.talker === "on" ? true : false;
    console.log(likesToTalk);
    this.props.post(this.props.number, likesToTalk);
  };

  render = () => {
    return (
      <div>
        <LeadIn>I think I'm a</LeadIn>
        <form onSubmit={this.onSubmit}>
          <Option>
            Talker
            <input
              type="radio"
              name="talker"
              onChange={this.onChange}
              checked={this.state.talker}
            />
          </Option>
          <Option>
            Non-talker
            <input
              type="radio"
              name="stoic"
              onChange={this.onChange}
              checked={this.state.stoic}
            />
          </Option>
          <button>Sit here</button>
        </form>
      </div>
    );
  };
}

export default Tooltip;

const Option = styled.label`
  margin-right: 10px;
`;

const LeadIn = styled.p`
  margin-top: 0;
  font-weight: bold;
  color: #3c74aa;
`;
