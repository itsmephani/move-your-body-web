import Slide from "../Ui/Slider/Slide";
import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

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

  return (
    <Slide>
      <Paper variant="outlined" className={classes.signUp}>
        <Typography variant="h4">Signup</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Slide>
  );
};
