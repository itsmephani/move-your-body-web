import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import Slider from "../Ui/Slider/Slider";
import Slide from "../Ui/Slider/Slide";
import Step1 from "./Step1";
import Step2 from "./Step2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signupContainer: {
      width: 554,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
    },
    signUp: {
      display: "flex",
      flexDirection: "column",
      padding: "16px 32px",
    },
    form: {
      display: "flex",
      flexDirection: "column",

      "& > *": {
        width: "33ch",
        margin: theme.spacing(1) + "px 0",
      },
    },
    navigationButton: {
      width: 100,
      margin: 8,
    },
    submitButton: { width: 100 },
  })
);

export default () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  return (
    <div className={classes.signupContainer}>
      <Button
        variant="outlined"
        size="medium"
        color="primary"
        className={classes.navigationButton}
        onClick={() => setStep(step - 1)}
      >
        Back
      </Button>
      <Slider currentSlide={step}>
        <Step1></Step1>
        <Step2></Step2>
      </Slider>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.navigationButton}
        onClick={() => setStep(step + 1)}
      >
        Next
      </Button>
    </div>
  );
};
