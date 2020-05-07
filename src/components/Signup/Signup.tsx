import React from "react";
import {
  Paper,
  makeStyles,
  Theme,
  createStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signupContainer: {
      width: "auto",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
    },
    signUp: {
      display: "flex",
      padding: "16px 32px",
    },
    form: {
      display: "flex",
      flexDirection: "column",

      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.signupContainer}>
      <Paper variant="outlined" className={classes.signUp}>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography variant="h4">Signup</Typography>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="outlined" size="medium" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};
