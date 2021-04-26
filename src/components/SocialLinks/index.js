import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import clsx from "clsx";

import "./SocialLinks.scss";

const instagramLink = "https://www.instagram.com/covidresources.in/";
const twitterLink = "https://twitter.com/COVResourcesIn";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(97.93deg, #4452CE 43.88%, #6744CC 109.61%)",
    borderRadius: "50%",
    width: 40,
    height: 40,
  },
  marginLeft10: {
    marginLeft: 10,
  },
  marginRight10: {
    marginRight: 10,
  },
  icon: {},
}));

const SocialLinks = () => {
  const classes = useStyles();
  return (
    <Box paddingY={3} alignContent="center" textAlign="center">
      <Typography variant="h6">Follow Us</Typography>
      <Box
        marginTop={1}
        display="flex"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          onClick={() => {
            window.open(instagramLink, "_blank");
          }}
          py={1}
          textAlign="center"
          justifyContent="center"
          component="div"
          className={clsx(classes.button, classes.marginRight10, "d-flex")}
        >
          <InstagramIcon
            fontSize="small"
            className={classes.icon}
            color="secondary"
          />
        </Box>
        <Box
          onClick={() => {
            window.open(twitterLink, "_blank");
          }}
          py={1}
          textAlign="center"
          justifyContent="center"
          component="div"
          className={clsx(classes.button, classes.marginLeft10, "d-flex")}
        >
          <TwitterIcon
            fontSize="small"
            className={classes.icon}
            color="secondary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
