import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import $ from "jquery";
import { airDarkGray, airTeal } from "./Colors";
import "./App.css";
import Form from "./Form.js";
import SeatMap from "./SeatMap.js";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: "",
      seats: {}
    };
  }

  onFormSubmit = flight => {
    // this.setState({
    //   flight: flight
    // });
    this.getSeatMap(flight);
  };

  getSeatMap = flight => {
    $.ajax({
      method: "GET",
      url: `http://18.188.0.114:8000/seats?flight=${flight}`,
      headers: { "content-type": "application/json" },
      success: data => {
        console.log(data);
        this.setState({
          flight: flight,
          seats: data
        });
      },
      error: err => {
        console.log("err", err);
      }
    });
  };

  render() {
    const flightDetailText =
      "Nonstop | Details Alaska 1084\nDistance: 2,412 mi | \nDuration: 4hours59m";
    const flightDepartText = "San Francisco (SFO)\nThu, Feb 20\n9:45 am";
    const flightArriveText =
      "Washington, DC-Dulles (IAD)\nThu, Feb 20\n5:44 pm";
    if (this.state.flight.length === 0) {
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
              {"AirBuddy"}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
            <View style={{ flex: 0.3, marginHorizontal: 20, marginTop: 20 }}>
              <Text style={styles.textStep}>
                {"Step 1: Input Info"}
              </Text>
              <Text style={[styles.textStep, { fontWeight: "bold" }]}>{"Step 2: Seat Selection"}</Text>
              <Text style={styles.textStep}>{"Step 3: Confirmation"}</Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text style={styles.textSubtitleBlue}>
                {"Your confirmed reservation"}
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: airDarkGray,
                  marginTop: 20,
                  paddingHorizontal: 20,
                  paddingBottom: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginBottom: 20,
                    marginTop: 10
                  }}
                >
                  {"Flight summary"}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ paddingRight: 15, flex: 1 }}>
                  <Text style={styles.textSubtitleLightBlue}>{"Flight "}{this.state.flight}</Text>
                    <Text>{flightDetailText}</Text>
                  </View>
                  <View style={{ paddingRight: 15, flex: 1 }}>
                    <Text style={styles.textSubtitleLightBlue}>
                      {"Departs"}
                    </Text>
                    <Text>{flightDepartText}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.textSubtitleLightBlue}>
                      {"Arrives"}
                    </Text>
                    <Text>{flightArriveText}</Text>
                  </View>
                </View>
              </View>
              <SeatMap data={this.state.seats} />
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
