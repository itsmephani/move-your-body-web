import {
  Paper,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import Slide from "../Ui/Slider/Slide";
import "./Signup.scss";
import { blue } from "@material-ui/core/colors";
import classes from "*.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      borderColor: blue["500"],
    },
  })
);

export default () => {
  const classes = useStyles();
  const [gender, setGender] = useState("Male");

  return (
    <Slide>
      <Paper variant="outlined" style={{ height: "100%" }}>
        <Typography variant="h4">I'm</Typography>
        <div className="flex">
          <div
            role="button"
            onClick={() => setGender("Male")}
            className={
              "genderSelection " + (gender == "Male" ? classes.selected : "")
            }
            style={{ backgroundImage: "url(/images/jogging.png)" }}
          ></div>
          <div
            role="button"
            onClick={() => setGender("FeMale")}
            className={
              "genderSelection " + (gender == "FeMale" ? classes.selected : "")
            }
            style={{ backgroundImage: "url(/images/meditation.png)" }}
          ></div>
        </div>
      </Paper>
    </Slide>
  );
};
