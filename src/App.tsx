import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import Signup from "./components/Signup/Signup";
import Logo from "./components/Logo/Logo";
import {get} from "./services/http";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: "Lato",
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
  })
);

function App() {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const info = get('https://murmuring-falls-21273.herokuapp.com/api/info');
    setUserInfo(info);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <div className={classes.title}>
              <Logo></Logo>
            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
        {JSON.stringify(userInfo)}
        <Signup></Signup>
      </div>
    </ThemeProvider>
  );
}

export default App;
