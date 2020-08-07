import React from "react";
//import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="inherit" href="github.com/paramdubey">
        github.com/paramdubey
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "Dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="body1">Designed By Param Dubey</Typography>
        <Copyright />
      </footer>
    </div>
  );
}
