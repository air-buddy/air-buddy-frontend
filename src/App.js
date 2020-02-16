import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import $ from "jquery";
import { airDarkGray, airTeal } from "./Colors";
import "./App.css";
import Form from "./Form.js";
import SeatMap from "./SeatMap.js";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import Passengers from "./Passengers.js";
import Legend from "./Legend.js";
import ConfirmationPage from "./ConfirmationPage";

const INITIAL_STATE = {
  flight: "",
  seats: {},
  seatNumber: null,
  likesToTalk: null
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  reset = () => this.setState(INITIAL_STATE);

  onFormSubmit = flight => {
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

  postTalkPreference = (seatNumber, likesToTalk) => {
    // Update locally.
    const seatIndex = this.state.seats.seats.findIndex(
      s => s.number === seatNumber
    );
    if (seatIndex > 0) {
      const updatedSeats = this.state.seats.seats.slice();
      updatedSeats[seatIndex] = {
        ...updatedSeats[seatIndex],
        isAvailable: false,
        preferences: { likesToTalk }
      };
      this.setState({
        seats: {
          ...this.state.seats,
          seats: updatedSeats
        }
      });
      setTimeout(() => this.setState({ seatNumber, likesToTalk }), 1500);
    }
    $.ajax({
      method: "POST",
      url: "http://18.188.0.114:8000/seats",
      dataType: "json",
      headers: { "content-type": "application/json" },
      data: JSON.stringify({
        flight: this.state.flight,
        number: seatNumber,
        likesToTalk
      }),
      success: response => {
        console.log(response);
        this.getSeatMap(this.state.flight);
      },
      error: err => {
        console.log("err", err);
      }
    });
  };

  render() {
    const flightDetailText =
      "Nonstop | Details United 100\nDistance: 2,412 mi | \nDuration: 4hours59m";
    const flightDepartText = "San Francisco (SFO)\nThu, Feb 20\n9:45 am";
    const flightArriveText =
      "Washington, DC-Dulles (IAD)\nThu, Feb 20\n5:44 pm";
    if (this.state.flight.length === 0) {
      return (
        <View>
          <Heading>
            <Title>AirBuddy</Title>
          </Heading>
          <Container maxWidth="sm">
            <Form onFormSubmit={this.onFormSubmit} />
          </Container>
        </View>
      );
    } else if (this.state.seatNumber == null) {
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
          <View
            style={{
              flexDirection: "row",
              maxWidth: 1200,
              alignSelf: "center"
            }}
          >
            <View style={{ flex: 0.3, marginHorizontal: 20, marginTop: 20 }}>
              <Text style={styles.textStep}>{"Step 1: Input Info"}</Text>
              <Text style={[styles.textStep, { fontWeight: "bold" }]}>
                {"Step 2: Seat Selection"}
              </Text>
              <Text style={styles.textStep}>{"Step 3: Confirmation"}</Text>
              <Passengers />
              <Legend />
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
                    <Text style={styles.textSubtitleLightBlue}>
                      {"Flight "}
                      {this.state.flight}
                    </Text>
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
              <SeatMap
                data={this.state.seats}
                postReq={this.postTalkPreference}
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <ConfirmationPage
          flight={this.state.flight}
          seatNumber={this.state.seatNumber}
          likesToTalk={this.state.likesToTalk}
          returnToStart={this.reset}
        />
      );
    }
  }
}

export default App;

const Heading = styled.div`
  position: absolute;
  width: 100%;
  height: 114px;
  left: 0px;
  top: 0px;
  background: #62a8c2;
`;

const Title = styled.p`
  position: absolute;
  width: 290px;
  margin: 16px 155px;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 82px;
  /* identical to box height */
  color: #ffffff;
`;
