import * as React from "react";
import SideNav from "../../components/sideNav";
import DashboardTab from "../../components/dashboardTab";
import { Box, Container, Grid, Paper } from "@mui/material";
import useStyles from "../../styles/useStyles";

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2} className={classes.dashboardGrid}>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 500,
                },
              }}
            >
              <Paper className={classes.paperContainer} elevation={3}></Paper>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 570,
                  height: 500,
                },
              }}
            >
              <Paper className={classes.paperContainer} elevation={3}></Paper>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 350,
                  height: 500,
                },
              }}
            >
              <Paper className={classes.paperContainer} elevation={3}></Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
