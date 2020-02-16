import React from "react";
import styled, { css } from "styled-components";

function Tooltip(props) {
    return (
        <Box>
            <p>I think I'm a</p>
            <form>
                <label>Talker
                    <input type="radio" />
                </label>
                <label>Non-talker
                    <input type="radio" />
                </label>
            </form>
        </Box>
    )
}

export default Tooltip;

const Box = styled.div`
  position: absolute;
//   top: -10px;
//   left: -22px;
//   z-index: 
  background-color: #ffffff;
  border: 3px solid #F4F4F4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;