import Slide from "../Ui/Slider/Slide";
import React, { Props, useState } from "react";
import {
  Paper,
  Typography,
  // makeStyles,
  // Theme,
  // createStyles,
} from "@material-ui/core";
import { SignupStepProps } from "./Signup";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     signupContainer: {
//       width: 554,
//       margin: "auto",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: 32,
//     },
//     form: {
//       display: "flex",
//       flexDirection: "column",

//       "& > *": {
//         width: "33ch",
//         margin: theme.spacing(1) + "px 0",
//       },
//     },
//     navigationButton: {
//       width: 100,
//       margin: 8,
//     },
//     submitButton: { width: 100 },
//   })
// );

export default (props: Props<{}> & SignupStepProps) => {
  const [weight] = useState(60);

  return (
    <Slide>
      <Paper variant="outlined" className="signUp">
        <Typography variant="h4">Weighs</Typography>
        <div></div>
        <div>{weight}</div>
      </Paper>
    </Slide>
  );
};
