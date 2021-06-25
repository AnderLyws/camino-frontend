import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import deviceReadings from "./Components/DeviceCards/deviceReadings";

const useStyles = makeStyles({
  deviceCardsContainer: {
    paddingTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  card: {
    height: "200px",
  },
  h1: {
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const toFirstCharUppercase = (name) =>
  name.charAt(0).toUppercase() + name.slice(1);

const DeviceCards = (props) => {
  const classes = useStyles();
  const [DeviceCards, setDeviceCards] = useState({ deviceReadings });
  const [filter, setFilter] = useState({});

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getDeviceCard = (deviceName) => {
    const { name, unit, date, value } = deviceReadings[`${deviceName}`];

    const getDeviceCard = (deviceUnit, deviceDate) => {
      const { unit, date } = deviceReadings[`${deviceUnit}`];
    };

    return (
      <Grid item xs={3} key={deviceName}>
        <Card className={classes.card}>
          <CardContent>
            <Typography>
              <h1 className={classes.h1}>{`${name}`}</h1>
              <p>
                <b>unit:</b> {`${unit}`}
              </p>
              <p>
                <b>date:</b> {`${date}`}
              </p>
              <p>
                <b>value:</b> {`${value}`}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <div></div>
      </AppBar>

      <Grid container spacing={4} className={classes.deviceCardsContainer}>
        {Object.keys(deviceReadings).map((deviceName) =>
          getDeviceCard(deviceName)
        )}
      </Grid>
    </>
  );
};

export default DeviceCards;
