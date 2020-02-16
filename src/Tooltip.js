import React from "react";
import styled from "styled-components";

function Tooltip(props) {
  return (
    <div>
      <LeadIn>I think I'm a</LeadIn>
      <form onSubmit={props.post}> 
        <label>
          Talker
          <input type="radio" />
        </label>
        <label>
          Non-talker
          <input type="radio" />
        </label>
        <button>Sit here</button>
      </form>
    </div>
  );
}

export default Tooltip;

const LeadIn = styled.p`
  margin-top: 0;
  font-weight: bold;
  color: #3C74AA;
`;
