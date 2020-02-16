import React, { memo, useState } from "react";

const FlightSelector = memo(function FlightSelector({ selectFlight }) {
  const [isLoading, setIsLoading] = useState(false);

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
});
