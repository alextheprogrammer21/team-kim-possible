import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#6565ff",
  },
  navbar: {
    backgroundColor: "#fff",
    color: "black",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
  },
  links: {
    color: "black",
    "&:hover": {
      color: "orange",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Travel Booking
          </Typography>
          <Button className={classes.links}>Explore</Button>
          <Button className={classes.links}>Flights</Button>
          <Button className={classes.links}>Hotels</Button>
          <Button className={classes.links}>Cars</Button>
          <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee38b4e-1ad8-433e-b83b-5f1492547b2d/d3a4k16-486f7e33-afd1-4d1d-a573-ff3d9ea74e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmVlMzhiNGUtMWFkOC00MzNlLWI4M2ItNWYxNDkyNTQ3YjJkXC9kM2E0azE2LTQ4NmY3ZTMzLWFmZDEtNGQxZC1hNTczLWZmM2Q5ZWE3NGU4Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.g16PZQ0d4y8s6zV_SIhLryhy9X6UXCC0ZMN0mIW35Uk" />
        </Toolbar>
      </AppBar>
    </div>
  );
}