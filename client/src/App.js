import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import hawaii from "./images/hawaii.jpeg";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar positiion="static" color="inherit">
        <Typography variant="h2" align="center">
          My Vacations
        </Typography>
        <img src={hawaii} alt="my-vacations" height="100"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          ></Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
