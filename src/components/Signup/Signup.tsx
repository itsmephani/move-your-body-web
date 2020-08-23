import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Icon,
} from "@material-ui/core";
import Slider from "../Ui/Slider/Slider";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import SignupService from "./SignupService";

const singupService = new SignupService();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signupContainer: {
      width: 444,
      margin: "auto",
      display: "flex",
      flexDirection: "column",
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
      marginTop: 8,
    },
    submitButton: { width: 100 },
  })
);
export type SignupStepProps = {
  data?: {};
  dataUpdate: (data: any) => void;
};

export default () => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const handleDataUpdate = async ({ step, data }: any) => {
    setUser({ ...user, ...data });

    if (step === 3) {
      const response = await singupService.register(user);
      console.log(response);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={classes.signupContainer}>
      <Slider currentSlide={currentStep}>
        <StepOne dataUpdate={handleDataUpdate}></StepOne>
        <StepTwo dataUpdate={handleDataUpdate}></StepTwo>
        <StepThree dataUpdate={handleDataUpdate}></StepThree>
        <StepFour dataUpdate={handleDataUpdate}></StepFour>
      </Slider>
      <div className="flex spaceBetween fullWidth">
        {currentStep > 0 ? (
          <Button
            className={classes.navigationButton}
            variant="outlined"
            size="medium"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            <Icon>arrow_back</Icon> Prev
          </Button>
        ) : (
          <div className={classes.navigationButton}></div>
        )}
        {currentStep < 3 ? (
          <Button
            className={classes.navigationButton}
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next <Icon color="primary">arrow_forward</Icon>
          </Button>
        ) : (
          <div className={classes.navigationButton}></div>
        )}
      </div>
    </div>
  );
};
