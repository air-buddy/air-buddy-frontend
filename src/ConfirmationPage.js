import React, { memo } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";
import { airTeal } from "./Colors";

const ConfirmationPage = memo(function ConfirmationPage({
  flight,
  seatNumber,
  likesToTalk,
  returnToStart
}) {
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
      <Container>
        <Message>
          You are confirmed as a <b>{likesToTalk ? "talker" : "non-talker"}</b>{" "}
          in seat <b>{seatNumber}</b> on flight <b>{flight}</b>!
        </Message>
        <LinkToStart onClick={returnToStart}>Return to start</LinkToStart>
      </Container>
    </View>
  );
});
export default ConfirmationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  align-self: center;
`;

const Message = styled.p`
  margin-top: 100px;
  font-size: 24px;
`;

const LinkToStart = styled.p`
  margin-top: 40px;
  color: #137cbd;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #0e5a8a;
    text-decoration: underline;
  }
`;
