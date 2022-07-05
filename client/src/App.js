import React from "react";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import hawaii from "./images/hawaii.jpeg";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar positiion="static" color="inherit">
        <Typography variant="h2" align="center">
          My Vacations
        </Typography>
        <img src={hawaii} alt="my-vacations" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
