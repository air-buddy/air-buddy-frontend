import React from "react";
import { Text, View } from "react-native";
import { airDarkGray, airLinkBlue, airTeal } from "./Colors";

import "./App.css";
import Form from "./Form.js";
import SeatMap from "./SeatMap.js";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: ""
    };
  }

  onFormSubmit = flight => {
    this.setState({
      flight: flight
    });
  };

  render() {
    const flightDetailText =
      "Nonstop | Details Alaska 1084\nDistance: 2,412 mi | \nDuration: 4hours59m";
    const flightDepartText = "San Francisco (SFO)\nThu, Feb 20\n9:45 am";
    const flightArriveText =
      "Washington, DC-Dulles (IAD)\nThu, Feb 20\n5:44 pm";
    console.log(this.state.flight);
    if (this.state.flight.length === 1) {
      return (
        <View>
          <Heading>
            <Title>AirBuddy</Title>
          </Heading>
          <Form onFormSubmit={this.onFormSubmit} />
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ height: 100, backgroundColor: airTeal }}>
            <Text
              style={{
                color: "white",
                fontSize: 50,
                marginLeft: 80,
                marginTop: 20,
                fontWeight: "bold"
              }}
            >
              AirBuddy
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.3, marginLeft: 20, marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                {"Step 1: Input Info"}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 10
                }}
              >
                {"Step 2: Seat Selection"}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 10
                }}
              >
                {"Step 3: Confirmation"}
              </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 10,
                  marginTop: 20
                }}
              >
                {"Your confirmed reservation"}
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: airDarkGray,
                  paddingHorizontal: 20,
                  paddingBottom: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginBottom: 10,
                    marginTop: 20
                  }}
                >
                  {"Flight summary"}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ paddingRight: 10, flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: airLinkBlue
                      }}
                    >
                      {"Flight"}
                    </Text>
                    <Text>{flightDetailText}</Text>
                  </View>
                  <View style={{ paddingRight: 10, flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: airLinkBlue
                      }}
                    >
                      {"Departs"}
                    </Text>
                    <Text>{flightDepartText}</Text>
                  </View>
                  <View style={{ paddingRight: 10, flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: airLinkBlue
                      }}
                    >
                      {"Arrives"}
                    </Text>
                    <Text>{flightArriveText}</Text>
                  </View>
                </View>
              </View>
              <Text>Flight {this.state.flight}</Text>
              <SeatMap />
            </View>
          </View>
        </View>
      );
    }
  }
}

export default App;

const Heading = styled.div`
  position: absolute;
  width: 1440px;
  height: 114px;
  left: 0px;
  top: 0px;
  background: #62a8c2;
`;

const Title = styled.p`
  position: absolute;
  width: 290px;
  // height: 82px;
  // left: 155px;
  // top: 16px;
  margin: 16px 155px;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 82px;
  /* identical to box height */
  color: #ffffff;
`;
