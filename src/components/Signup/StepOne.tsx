import {
  Paper,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import React, { useState, Props } from "react";
import Slide from "../Ui/Slider/Slide";
import "./Signup.scss";
import { blue } from "@material-ui/core/colors";
import classes from "*.module.css";
import { SignupStepProps } from "./Signup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      borderColor: blue["500"],
    },
  })
);

export default (props: Props<{}> & SignupStepProps) => {
  const classes = useStyles();
  const [gender, setGender] = useState("Male");

  return (
    <Slide>
      <Paper className="signUp" variant="outlined" style={{ height: "100%" }}>
        <Typography variant="h4">I'm</Typography>
        <div className="flex layoutColumn justifyCenter alignCenter">
          <div
            className="genderSelected"
            style={{
              height: 212,
              backgroundImage:
                gender == "Male"
                  ? "url(/images/jogging.png)"
                  : "url(/images/meditation.png)",
            }}
          ></div>
          <div className="flex justifyCenter">
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
                "genderSelection " +
                (gender == "FeMale" ? classes.selected : "")
              }
              style={{ backgroundImage: "url(/images/meditation.png)" }}
            ></div>
          </div>
        </div>
      </Paper>
    </Slide>
  );
};
